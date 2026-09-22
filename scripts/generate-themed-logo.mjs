import { mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const sourcePath = join(projectRoot, "logo.png");
const outputPaths = [
  join(projectRoot, "src/assets/images/peterson-logo-themed.png"),
  join(projectRoot, "public/images/peterson-logo-themed.png"),
];

const source = await readFile(sourcePath);
const { width, height } = await sharp(source).metadata();

if (!width || !height) {
  throw new Error("Unable to read the source logo dimensions.");
}

const { data: sourcePixels, info } = await sharp(source)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixelCount = width * height;
const maskState = new Uint8Array(pixelCount);
const componentQueue = new Int32Array(pixelCount);

for (let pixel = 0; pixel < pixelCount; pixel += 1) {
  if (sourcePixels[pixel * 4 + 3] >= 8) {
    maskState[pixel] = 1;
  } else {
    sourcePixels[pixel * 4 + 3] = 0;
  }
}

for (let seed = 0; seed < pixelCount; seed += 1) {
  if (maskState[seed] !== 1) continue;

  let head = 0;
  let tail = 1;
  componentQueue[0] = seed;
  maskState[seed] = 2;

  while (head < tail) {
    const pixel = componentQueue[head];
    head += 1;
    const x = pixel % width;
    const y = Math.floor(pixel / width);
    const neighbors = [
      x > 0 ? pixel - 1 : -1,
      x + 1 < width ? pixel + 1 : -1,
      y > 0 ? pixel - width : -1,
      y + 1 < height ? pixel + width : -1,
    ];

    for (const neighbor of neighbors) {
      if (neighbor >= 0 && maskState[neighbor] === 1) {
        maskState[neighbor] = 2;
        componentQueue[tail] = neighbor;
        tail += 1;
      }
    }
  }

  if (tail < 200) {
    for (let index = 0; index < tail; index += 1) {
      sourcePixels[componentQueue[index] * 4 + 3] = 0;
    }
  }
}

const cleanedSource = await sharp(sourcePixels, { raw: info }).png().toBuffer();
const embeddedSource = cleanedSource.toString("base64");
const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <filter id="logo-theme" x="-10%" y="-10%" width="120%" height="120%" color-interpolation-filters="sRGB">
        <feMorphology in="SourceAlpha" operator="dilate" radius="12" result="stroke-shape" />
        <feFlood flood-color="#ffffff" result="stroke-color" />
        <feComposite in="stroke-color" in2="stroke-shape" operator="in" result="stroke" />
        <feFlood flood-color="#591024" result="fill-color" />
        <feComposite in="fill-color" in2="SourceAlpha" operator="in" result="fill" />
        <feMerge>
          <feMergeNode in="stroke" />
          <feMergeNode in="fill" />
        </feMerge>
      </filter>
    </defs>
    <image width="${width}" height="${height}" href="data:image/png;base64,${embeddedSource}" filter="url(#logo-theme)" />
  </svg>
`;

const themedLogo = await sharp(Buffer.from(svg)).png().toBuffer();

for (const outputPath of outputPaths) {
  await mkdir(dirname(outputPath), { recursive: true });
  await sharp(themedLogo).toFile(outputPath);
}
