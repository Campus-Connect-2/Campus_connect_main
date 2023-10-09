// HorizontalScrollableLogos.js

import React from 'react';
import './Topics.css';

const logos = [
  { id: 1, src: 'https://picsum.photos/1', caption: 'Software' },
  { id: 2, src: 'https://picsum.photos/201', caption: 'Career' },
  { id: 3, src: 'https://picsum.photos/520', caption: 'Product' },
  { id: 4, src: 'https://picsum.photos/80', caption: 'Internships' },
  { id: 3, src: 'https://picsum.photos/900', caption: 'College' },
  { id: 4, src: 'https://picsum.photos/200', caption: 'Machine Learning' },
  { id: 3, src: 'https://picsum.photos/200', caption: 'Experiences' },
  { id: 4, src: 'https://picsum.photos/277', caption: 'Logo 4' },
  { id: 3, src: 'https://picsum.photos/71', caption: 'Experiences' },
  { id: 4, src: 'https://picsum.photos/91', caption: 'Logo 4' },
];

const Topics = () => {
  return (
    <div className="horizontal-scrollable-logos">
      {logos.map((logo) => (
        <div key={logo.id} className="logo-card">
          <img src={logo.src} alt={logo.caption} className="logo" />
          <p className="caption">{logo.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Topics;
