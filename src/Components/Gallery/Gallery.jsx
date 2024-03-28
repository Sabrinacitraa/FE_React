
import React from 'react';
import './Gallery.css';


const images = [
  { src: 'image1.jpg', description: 'Deskripsi gambar 1' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  { src: 'gambar2.jpg', description: 'Deskripsi gambar 2' },
  
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          {/* <img src={require('../../Assets'+images+'.jpg')} alt={`image ${index + 1}`} /> */}
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
