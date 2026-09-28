import { useState } from 'react';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const photos = [
    { src: '/images/cat wed.jpg', alt: 'Pre-wedding garden walk', span: 'col-span-2' },
    { src: '/images/cat wed 1.jpg', alt: 'Groom portrait', span: '' },
    { src: '/images/cat wed 2.jpg', alt: 'Bride portrait', span: '' },
    { src: '/images/cat wed 2.jpg', alt: 'Couple moment', span: '' },
    { src: '/images/cat wed 1.jpg', alt: 'Wedding detail', span: '' },
    { src: '/images/cat wed.jpg', alt: 'Pre-wedding sunset', span: 'col-span-2' },
  ];

  return (
    <section id="gallery" className="py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-10 animate-on-scroll">
        <p className="font-jakarta text-xs tracking-[0.3em] uppercase text-champagne mb-3">
          Our Moments
        </p>
        <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Galeri Foto
        </h2>
        <p className="font-jakarta text-sm text-muted">
          Beberapa momen indah yang kami abadikan bersama.
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 gap-2 animate-on-scroll">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className={`${photo.span} relative overflow-hidden rounded-xl cursor-pointer
              group aspect-square`}
            onClick={() => setLightbox(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500
                group-hover:scale-110"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20
              transition-colors duration-300 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100
                  transition-all duration-300 transform scale-75 group-hover:scale-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6
            bg-charcoal/90 backdrop-blur-md animate-fadeIn cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10
              flex items-center justify-center text-white hover:bg-white/20
              transition-colors duration-200"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl
              animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
