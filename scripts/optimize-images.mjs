import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { mkdirp } from 'mkdirp';
import { optimize as svgoOptimize } from 'svgo';

// --- Configuration --- //

const imageOptimizationJobs = [
  {
    name: 'Tour Card Images',
    sourceDir: 'src/assets/image-originals/tour-card-images',
    outputDir: 'public/images/tour-card-images',
    sizes: [240, 480, 800],
    formats: [
      { format: 'jpeg', quality: 85 },
      { format: 'webp', quality: 90 },
    ],
  },
  {
    name: 'About Us Images',
    sourceDir: 'src/assets/image-originals/about-images',
    outputDir: 'public/images/about-images',
    sizes: [400, 800],
    formats: [
      { format: 'jpeg', quality: 80 },
      { format: 'webp', quality: 85 }
    ],
    fileFilter: (file) => file.endsWith('.png'),
  },
  {
    name: 'Testimonial Images',
    sourceDir: 'src/assets/image-originals/testimonial-images',
    outputDir: 'public/images/testimonial-images',
    sizes: [400, 800, 1600],
    formats: [
      { format: 'jpeg', quality: 80 },
      { format: 'webp', quality: 85 }
    ],
    fileFilter: (file) => file.endsWith('.png'),
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
    name: 'Bucovina Tour Gallery',
    sourceDir: 'src/assets/image-originals/tour-page-gallery-bucovina',
    outputDir: 'public/images/tour-page-gallery-bucovina',
    sizes: [480, 800, 1200],
    formats: [
      { format: 'jpeg', quality: 80 },
      { format: 'webp', quality: 85 },
    ],
  },
  {
    name: 'Maramures Tour Gallery',
    sourceDir: 'src/assets/image-originals/tour-page-gallery-maramures',
    outputDir: 'public/images/tour-page-gallery-maramures',
    sizes: [480, 800, 1200],
    formats: [
      { format: 'jpeg', quality: 80 },
      { format: 'webp', quality: 85 },
    ],
    fileFilter: (file) => !file.endsWith('.heic'),
  },
  {
    name: 'Logo',
    sourceDir: 'src/assets/image-originals/logo-img',
    outputDir: 'public/images/logo-img',
    sizes: [160, 320], 
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

const svgOptimizationJobs = [
  {
    name: 'Footer SVGs',
    sourceDir: 'src/assets/image-originals/footer-images',
    outputDir: 'public/images/footer-images',
    fileFilter: (file) => file.endsWith('.svg'),
  },
  {
    name: 'Testimonial SVGs',
    sourceDir: 'src/assets/image-originals/testimonial-images',
    outputDir: 'public/images/testimonial-images',
    fileFilter: (file) => file.endsWith('.svg'),
  }
];

// --- Script --- //

async function processImageJob(job) {
  console.log(`--- Starting Image Job: ${job.name} ---`);
  try {
    await mkdirp(job.outputDir);
    let files = await fs.readdir(job.sourceDir);

    if (job.fileFilter) {
      files = files.filter(job.fileFilter);
    }

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
    console.log(`--- Finished Image Job: ${job.name} ---\n`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`Source directory not found for job '${job.name}': ${job.sourceDir}. Skipping.`);
    } else {
      console.error(`Error processing job '${job.name}':`, error);
    }
  }
}

async function processSvgJob(job) {
  console.log(`--- Starting SVG Job: ${job.name} ---`);
  try {
    await mkdirp(job.outputDir);
    let files = await fs.readdir(job.sourceDir);

    if (job.fileFilter) {
      files = files.filter(job.fileFilter);
    }

    for (const file of files) {
      const sourcePath = path.join(job.sourceDir, file);
      const fileStats = await fs.stat(sourcePath);
      if (fileStats.isDirectory() || !file.endsWith('.svg')) continue;
      
      console.log(`Optimizing ${file}...`);

      const svgContent = await fs.readFile(sourcePath, 'utf-8');
      const { data: optimizedSvg } = svgoOptimize(svgContent);
      
      const targetPath = path.join(job.outputDir, file);
      await fs.writeFile(targetPath, optimizedSvg);
    }
    console.log(`--- Finished SVG Job: ${job.name} ---\n`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`Source directory not found for SVG job '${job.name}': ${job.sourceDir}. Skipping.`);
    } else {
      console.error(`Error processing SVG job '${job.name}':`, error);
    }
  }
}

async function runAllJobs() {
  console.log('Starting image optimization process...');
  for (const job of imageOptimizationJobs) {
    await processImageJob(job);
  }
  for (const job of svgOptimizationJobs) {
    await processSvgJob(job);
  }
  console.log('--- All optimization jobs finished. ---');
}

runAllJobs();
