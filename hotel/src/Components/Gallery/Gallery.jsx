import React from 'react';
import './Gallery.css';
import img1 from '../../Assets/image23.jpg'
import img2 from '../../Assets/image 25.jpg'
import img3 from '../../Assets/image 26.jpg'
import img4 from '../../Assets/image 27.jpg'
import img5 from '../../Assets/image 28.jpg'
import img6 from '../../Assets/image 29.jpg'
import img7 from '../../Assets/image 30.jpg'
import img8 from '../../Assets/image31.jpg'
import img9 from '../../Assets/image 32.jpg'
import img10 from '../../Assets/image 33.jpg'
import img11 from '../../Assets/image 34.jpg'
import img12 from '../../Assets/image 35.jpg'
import img13 from '../../Assets/image 36.jpg'
import img14 from '../../Assets/image 37.jpg'
import img15 from '../../Assets/image 38.jpg'
import img16 from '../../Assets/image 39.jpg'



const images = [
  { src: img1, description: 'Four Points Westside Brew House Bar and Restaurant' },
  { src: img2, description: 'Four Points Hotel Lobby' },
  { src: img3, description: 'Four Points Hotel Exterior' },
  { src: img4, description: 'Four Points Hotel Swimming Pool' },
  { src: img5, description: 'Four Points Front Desk Detail' },
  { src: img6, description: 'Four Points Bathroom' },
  { src: img7, description: 'Four Points Business Meeting' },
  { src: img8, description: 'Four Points Friends Cheers' },
  { src: img9, description: 'Apple Brioche Loaf, Four Points by Sheraton Signature' },
  { src: img10, description: 'Grilled Panini, Four Points by Sheraton Signature' },
  { src: img11, description: 'Four Points Model Room' },
  { src: img12, description: 'Four Points Model Room, Desk' },
  { src: img13, description: 'Four Points Model Room, Bed Side Chair' },
  { src: img14, description: 'Four Points Model Room Bathroom' },
  { src: img15, description: 'Four Points King CV Guest Room' },
  { src: img16, description: 'Four Points Best Brew' },
];

const Gallery = () => {
  return (
    <>
    <div className='text'>
      <h1>Capturing records of significance warrants their public display.</h1>
    </div>
    <hr />
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={`Image ${index + 1}`} />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery;

