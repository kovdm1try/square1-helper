import { readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '../public');
const svgPath = resolve(publicDir, 'icon.svg');
const svgBuffer = readFileSync(svgPath);

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
];

for (const { name, size } of sizes) {
  await sharp(svgBuffer).resize(size, size).png().toFile(resolve(publicDir, name));
}

const ico32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
writeFileSync(resolve(publicDir, 'favicon.ico'), ico32);
