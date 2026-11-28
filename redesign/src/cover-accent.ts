import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { root } from 'astro:config/server';
import sharp from 'sharp';

const imageDirectory = fileURLToPath(new URL('../images', root));
const hueBins = 18;

function linearChannel(channel: number) {
  const srgb = channel / 255;
  return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
}

export async function getCoverAccent(src?: string): Promise<string | undefined> {
  if (!src?.startsWith('/images/')) return;

  const file = resolve(imageDirectory, src.slice('/images/'.length));
  if (!file.startsWith(imageDirectory + sep)) return;

  let pixels: Buffer;
  try {
    pixels = await sharp(file)
      .resize(48, 48, { fit: 'inside' })
      .toColourspace('srgb')
      .ensureAlpha()
      .raw()
      .toBuffer();
  } catch {
    // The accent is optional, so unreadable artwork uses the shared fallback.
    return;
  }

  const bins = Array.from({ length: hueBins }, () => ({ red: 0, green: 0, blue: 0, weight: 0, count: 0 }));
  let visible = 0;

  for (let index = 0; index < pixels.length; index += 4) {
    if (pixels[index + 3] < 128) continue;
    visible++;

    const [red, green, blue] = [pixels[index], pixels[index + 1], pixels[index + 2]];
    const max = Math.max(red, green, blue);
    const chroma = max - Math.min(red, green, blue);
    if (chroma < 24) continue;

    // Group nearby hues so shadows and highlights can contribute to the same accent.
    let sector = (green - blue) / chroma;
    if (max === green) sector = 2 + (blue - red) / chroma;
    else if (max === blue) sector = 4 + (red - green) / chroma;
    const bin = bins[(Math.round(sector * hueBins / 6) + hueBins) % hueBins];
    bin.red += red * chroma;
    bin.green += green * chroma;
    bin.blue += blue * chroma;
    bin.weight += chroma;
    bin.count++;
  }

  const dominant = bins.sort((a, b) => b.weight - a.weight)
    .find(({ count }) => count >= Math.max(1, visible * 0.04));
  if (!dominant) return;

  const source = [dominant.red, dominant.green, dominant.blue].map((sum) => sum / dominant.weight);
  const surfaceLuminance = linearChannel(29); // #1d1d1d is the lighter shared surface.

  for (let step = 0; step <= 20; step++) {
    const [red, green, blue] = source.map((channel) => Math.round(channel + (255 - channel) * step / 20));
    const luminance = 0.2126 * linearChannel(red) + 0.7152 * linearChannel(green) + 0.0722 * linearChannel(blue);
    if ((luminance + 0.05) / (surfaceLuminance + 0.05) >= 7) {
      return '#' + [red, green, blue].map((channel) => channel.toString(16).padStart(2, '0')).join('');
    }
  }
}
