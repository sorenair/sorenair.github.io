from PIL import Image
from pathlib import Path

# Configure input/output folders
input_dir = Path("originals")
output_dir = Path("output")
output_dir.mkdir(exist_ok=True)

# Sizes (in pixels wide) you want to generate
sizes = [400, 800, 1600]

# Quality setting for JPEG/WebP (0-100)
quality = 80

# Loop through all image files in originals folder
for image_path in input_dir.glob("*.*"):
    # Skip hidden or non-image files
    if image_path.suffix.lower() not in [".jpg", ".jpeg", ".png"]:
        continue

    # Open image
    with Image.open(image_path) as img:
        # Convert PNG with transparency to RGBA for webp
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGBA")
        else:
            img = img.convert("RGB")

        basename = image_path.stem  # filename without extension

        for size in sizes:
            # Calculate new height preserving aspect ratio
            w_percent = size / float(img.width)
            h_size = int(float(img.height) * w_percent)

            # Resize with high-quality resampling
            resized = img.resize((size, h_size), Image.LANCZOS)

            # Save as JPEG
            jpeg_path = output_dir / f"{basename}-{size}.jpg"
            resized.save(jpeg_path, "JPEG", quality=quality, optimize=True)

            print(f"Saved {jpeg_path}")

            # Save as WebP
            #webp_path = output_dir / f"{basename}-{size}.webp"
            #resized.save(webp_path, "WEBP", quality=quality, method=6)

            #print(f"Saved {jpeg_path} and {webp_path}")