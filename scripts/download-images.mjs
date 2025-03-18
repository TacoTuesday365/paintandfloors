import { createWriteStream } from 'fs';
import { mkdir } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = dirname(fileURLToPath(import.meta.url));

const images = [
  {
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f',
    filename: 'residential-painting.jpg',
    params: '?q=80&w=1200&auto=format&fit=crop'
  },
  {
    url: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d',
    filename: 'flooring.jpg',
    params: '?q=80&w=1200&auto=format&fit=crop'
  },
  {
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    filename: 'color-consultation.jpg',
    params: '?q=80&w=1200&auto=format&fit=crop'
  }
];

async function downloadImage(url, filename) {
  const filepath = new URL(`../public/images/${filename}`, import.meta.url);
  
  await mkdir(new URL('../public/images', import.meta.url), { recursive: true });
  
  return new Promise((resolve, reject) => {
    https.get(`${url}${params}`, (response) => {
      const fileStream = createWriteStream(filepath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
      
      fileStream.on('error', (err) => {
        console.error(`Error downloading ${filename}:`, err);
        reject(err);
      });
    });
  });
}

async function downloadAllImages() {
  try {
    await Promise.all(images.map(img => downloadImage(img.url, img.filename)));
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages(); 