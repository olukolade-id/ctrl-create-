# Portfolio media

Add project media in a folder named after the project slug. The archive scans these folders automatically, so you do not need to edit `lib/projects.ts` for gallery images:

```text
public/work/signal-noise/
  thumbnail.jpg
  hero.jpg
  detail-01.jpg
  detail-02.jpg
  motion.mp4
```

Use these conventional names to automatically update the work card and case-study hero:

```text
thumbnail.jpg  # work grid card
hero.jpg       # case-study hero
```

For other detail images, use any JPG, PNG or WebP filename. They will appear in `/archive` automatically. You only need to add matching paths to `lib/projects.ts` if you want those details in the case-study page itself:

```ts
media: {
  thumbnail: "/work/signal-noise/thumbnail.jpg",
  hero: "/work/signal-noise/hero.jpg",
  details: [
    "/work/signal-noise/detail-01.jpg",
    "/work/signal-noise/detail-02.jpg",
  ],
  motion: "/work/signal-noise/motion.mp4",
},
```

Use compressed JPG or WebP files for stills. Keep motion files short and export an accompanying `hero` image so the case study has a fast poster while the video loads.

## Testimonials and logos

Add real testimonials and collaborator names in `lib/proof.ts`. The proof section stays hidden until at least one real entry exists, so the public site never shows fake quotes or invented client logos.

## Adding 7-8 graphics

Put all 7-8 images in the project folder that best describes them, for example:

```text
public/work/signal-noise/
  graphic-01.jpg
  graphic-02.jpg
  graphic-03.jpg
  graphic-04.jpg
  graphic-05.jpg
  graphic-06.jpg
  graphic-07.jpg
  graphic-08.jpg
```

Open `/archive` in the browser and refresh. The gallery will show every JPG, PNG or WebP file, with View project, Like and Download controls. Likes are saved in each visitor's browser.