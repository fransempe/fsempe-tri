// Generates the web-sized photos in public/optimized/ from the originals in public/.
// Run after adding or replacing a photo: node scripts/optimize-images.mjs
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const PHOTOS = [
  "finish-nice.jpeg",
  "bike-nice.jpeg",
  "bike-nice-2.jpeg",
  "run-nice.jpeg",
  "run-nice-2.jpeg",
  "swim.JPG",
  "bike.JPG",
  "run.JPG",
  "finish.JPG",
  "profile-fs.jpeg",
];
const WIDTHS = [800, 1600, 2400];

await mkdir("public/optimized", { recursive: true });

for (const file of PHOTOS) {
  const name = file.split(".")[0];
  const { width: original } = await sharp(`public/${file}`).rotate().metadata();
  for (const width of WIDTHS.filter((w) => w <= original)) {
    await sharp(`public/${file}`)
      .rotate()
      .resize({ width })
      .webp({ quality: 74 })
      .toFile(`public/optimized/${name}-${width}.webp`);
  }
}

await sharp("public/mutti-logo.png").trim().resize({ height: 208 }).png().toFile("public/optimized/mutti-logo.png");

// The Ironman logo comes as a JPG on white: derive its alpha from the green channel (the logo is red),
// and export it in red and in white for backgrounds where red doesn't read.
const { data: logo, info: logoInfo } = await sharp("public/ironman.jpg")
  .trim({ threshold: 30 })
  .resize({ height: 96 })
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (const [file, [r, g, b]] of [
  ["ironman-logo", [200, 1, 44]],
  ["ironman-logo-white", [255, 255, 255]],
]) {
  const pixels = Buffer.alloc(logoInfo.width * logoInfo.height * 4);
  for (let i = 0; i < logoInfo.width * logoInfo.height; i++) {
    const alpha = Math.min(255, Math.max(0, Math.round(((240 - logo[i * 3 + 1]) / 230) * 255)));
    pixels.set([r, g, b, alpha], i * 4);
  }
  await sharp(pixels, { raw: { width: logoInfo.width, height: logoInfo.height, channels: 4 } })
    .png()
    .toFile(`public/optimized/${file}.png`);
}

// Link preview image for social networks (they don't all support webp).
await sharp("public/finish-nice.jpeg")
  .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
  .jpeg({ quality: 80 })
  .toFile("public/optimized/og-niza.jpg");
