# Media entries

The Media page (`/media/`) reads one JSON file per item from this folder. The filename is the item's id.

## Add a YouTube thumbnail or an Instagram post

1. Put the image in `images/media/youtube/` or `images/media/instagram/`. Use a lowercase name with hyphens, such as `dakota-thumbnail.jpg`. JPG, PNG, or WebP all work.
2. Copy `by-the-water.json` to a new file here, such as `dakota.json`, and edit it:

```json
{
  "title": "Dakota",
  "kind": "youtube",
  "cover": { "src": "/images/media/youtube/dakota-thumbnail.jpg", "alt": "Describe what the image shows." },
  "href": "https://www.youtube.com/watch?v=...",
  "date": "2025-08-14",
  "featured": true
}
```

3. Run `npm run build` in `redesign/` to check it.

## Fields

| Field | Use |
| --- | --- |
| `title` | Name shown under the item. |
| `kind` | `youtube`, `instagram`, `photo`, `artwork`, or `video` (a local mp4 with a poster). |
| `cover` | `src` (a path under `/images/media/` or `/images/work/`) and `alt` (describes the image). Not used by `video`. |
| `href` | Optional link to the original video or post. Needed for `youtube` and `instagram`. |
| `caption` | Optional short line of text. |
| `date` | Optional `YYYY-MM-DD`. Newest items are listed first. |
| `featured` | Optional. `true` makes the item a candidate for the Featured strip, up to five. |
| `project` | Optional Work slug, such as `overclock`, to link the item to its project. |
| `src`, `poster`, `description` | For `video` only: a site-root mp4, its poster image, and a sentence about it. |
