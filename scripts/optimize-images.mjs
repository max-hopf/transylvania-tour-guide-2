import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { mkdirp } from 'mkdirp';

// --- Configuration ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../src/assets/image-originals');
const outputDir = path.join(__dirname, '../public/images');

const imageSizes = [480, 800, 1200]; // Widths in pixels
const jpegQuality = 80;
const webpQuality = 85;

// --- Main Function ---
async function optimizeImages() {
  try {
    console.log('Starting image optimization...');
    await fs.access(sourceDir); // Check if source directory exists

    const files = await fs.readdir(sourceDir, { recursive: true });
    const imageTasks = [];

    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const stats = await fs.stat(sourcePath);

      if (stats.isDirectory()) {
        continue; // Skip directories
      }

      const fileExt = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(fileExt)) {
        imageTasks.push(processImage(file));
      }
    }

    await Promise.all(imageTasks);
    console.log('✅ Image optimization completed successfully!');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error: Source directory not found at ${sourceDir}`);
      console.error('Please make sure it exists and contains your images.');
    } else {
      console.error('An error occurred during image optimization:', error);
    }
    process.exit(1);
  }
}

// --- Image Processing ---
async function processImage(file) {
  const sourcePath = path.join(sourceDir, file);
  const relativePath = path.dirname(file);
  const fileName = path.basename(file, path.extname(file));

  const targetDir = path.join(outputDir, relativePath);
  await mkdirp(targetDir); // Create destination directory if it doesn't exist

  const image = sharp(sourcePath);

  const processingTasks = [];

  // Generate different sizes
  for (const size of imageSizes) {
    const targetFileNameWebp = `${fileName}-${size}w.webp`;
    const targetFileNameJpeg = `${fileName}-${size}w.jpg`;
    const targetPathWebp = path.join(targetDir, targetFileNameWebp);
    const targetPathJpeg = path.join(targetDir, targetFileNameJpeg);

    // WebP
    processingTasks.push(
      image
        .resize({ width: size })
        .webp({ quality: webpQuality })
        .toFile(targetPathWebp)
        .then(() => console.log(`Generated: ${path.join(relativePath, targetFileNameWebp)}`))
    );

    // JPEG
    processingTasks.push(
      image
        .resize({ width: size })
        .jpeg({ quality: jpegQuality })
        .toFile(targetPathJpeg)
        .then(() => console.log(`Generated: ${path.join(relativePath, targetFileNameJpeg)}`))
    );
  }

  return Promise.all(processingTasks);
}

// --- Run Script ---
optimizeImages();
