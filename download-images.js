const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2000',
    filename: 'hero-bg.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800',
    filename: 'residential-painting.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800',
    filename: 'flooring.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800',
    filename: 'color-consultation.jpg'
  }
];

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, 'public', 'images', filename);
  const file = fs.createWriteStream(filepath);

  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filepath, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

images.forEach(img => downloadImage(img.url, img.filename)); 