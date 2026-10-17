import { useState } from 'react';
import img1 from '../assets/imagine1.jpg';
import img2 from '../assets/imagine2.jpg';
import img3 from '../assets/imagine3.jpg';

const images = [img1, img2, img3];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <section className="gallery" aria-label="Galerie foto">
      <div className="gallery__frame">
        <img src={images[index]} alt={`Fotografie ${index + 1}`} className="gallery__image" />
        <button className="gallery__nav gallery__nav--prev" onClick={prev} aria-label="Imaginea anterioară">
          ‹
        </button>
        <button className="gallery__nav gallery__nav--next" onClick={next} aria-label="Imaginea următoare">
          ›
        </button>
      </div>
      <div className="gallery__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`gallery__dot ${i === index ? 'gallery__dot--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Mergi la imaginea ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
