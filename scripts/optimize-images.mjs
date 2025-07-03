import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { mkdirp } from 'mkdirp';

// --- Configuration --- //

const optimizationJobs = [
  {
    name: 'Tour Card Images',
    sourceDir: 'src/assets/image-originals/tour-card-images',
    outputDir: 'public/images/tour-card-images',
    sizes: [240, 480, 800],
    formats: [
      { format: 'jpeg', quality: 80 },
      { format: 'webp', quality: 85 },
    ],
  },
  {
    name: 'Tour Gallery',
    sourceDir: 'src/assets/image-originals/tour-page-gallery-transylvania',
    outputDir: 'public/images/tour-page-gallery-transylvania',
    sizes: [480, 800, 1200],
    formats: [
      { format: 'jpeg', quality: 80 },
      { format: 'webp', quality: 85 },
    ],
  },
  {
    name: 'Logo',
    sourceDir: 'src/assets/image-originals/logo-img',
    outputDir: 'public/images/logo-img',
    sizes: [160, 320], // 1x and 2x for high-DPI screens
    formats: [
      { format: 'png', quality: 90 },
      { format: 'webp', quality: 95 },
    ],
  },
  {
    name: 'Hero Image',
    sourceDir: 'src/assets/image-originals/hero-img',
    outputDir: 'public/images/hero-img',
    sizes: [640, 1024, 1280, 1920],
    formats: [
      { format: 'jpeg', quality: 85 },
      { format: 'webp', quality: 90 },
    ],
  },
  {
    name: 'Tour Page Hero Images',
    sourceDir: 'src/assets/image-originals/tour-page-hero-images',
    outputDir: 'public/images/tour-page-hero-images',
    sizes: [640, 1024, 1280, 1920],
    formats: [
      { format: 'jpeg', quality: 85 },
      { format: 'webp', quality: 90 },
    ],
  },
];

// --- Script --- //

async function processJob(job) {
  console.log(`--- Starting Job: ${job.name} ---`);
  try {
    await mkdirp(job.outputDir);
    const files = await fs.readdir(job.sourceDir);

    for (const file of files) {
      const sourcePath = path.join(job.sourceDir, file);
      const fileStats = await fs.stat(sourcePath);
      if (fileStats.isDirectory()) continue;

      const baseName = path.basename(file, path.extname(file));
      console.log(`Processing ${file}...`);

      for (const size of job.sizes) {
        for (const fmt of job.formats) {
          const targetPath = path.join(job.outputDir, `${baseName}-${size}w.${fmt.format}`);
          
          await sharp(sourcePath)
            .resize({ width: size })
            .toFormat(fmt.format, { quality: fmt.quality })
            .toFile(targetPath);
        }
      }
    }
    console.log(`--- Finished Job: ${job.name} ---\n`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`Source directory not found for job '${job.name}': ${job.sourceDir}. Skipping.`);
    } else {
      console.error(`Error processing job '${job.name}':`, error);
    }
  }
}

async function runAllJobs() {
  console.log('Starting image optimization process...');
  for (const job of optimizationJobs) {
    await processJob(job);
  }
  console.log('All image optimization jobs completed.');
}

// --- Run Script ---
runAllJobs();
