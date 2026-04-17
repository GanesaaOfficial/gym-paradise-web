import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const inputDir = join(root, 'public', 'Photos');
const outputDir = join(root, 'public', 'photos');

await mkdir(outputDir, { recursive: true });

const files = (await readdir(inputDir)).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`Converting ${files.length} images to WebP...\n`);

await Promise.all(
  files.map(async (file) => {
    const name = basename(file).replace(/\.(jpg|jpeg|png)$/i, '');
    const input = join(inputDir, file);
    const output = join(outputDir, `${name}.webp`);
    await sharp(input).webp({ quality: 85, effort: 4 }).toFile(output);
    console.log(`  ✓ ${file} → ${name}.webp`);
  })
);

console.log(`\nDone. ${files.length} images converted.`);
