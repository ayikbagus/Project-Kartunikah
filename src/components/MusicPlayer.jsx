import { useRef, useEffect } from 'react';

export default function MusicPlayer({ isPlaying, onToggle }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {
        // Autoplay blocked by browser — silently handle
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/wedding-play.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full
          bg-charcoal/90 backdrop-blur-sm shadow-xl shadow-black/20
          flex items-center justify-center
          hover:bg-charcoal transition-colors duration-300
          group"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {/* Vinyl disc */}
        <div
          className={`absolute inset-1 rounded-full border-2 border-champagne/30
            ${isPlaying ? 'animate-spin-slow' : ''}`}
          style={{
            background: 'conic-gradient(from 0deg, #2C2C2C 0deg, #3a3a3a 30deg, #2C2C2C 60deg, #3a3a3a 90deg, #2C2C2C 120deg, #3a3a3a 150deg, #2C2C2C 180deg, #3a3a3a 210deg, #2C2C2C 240deg, #3a3a3a 270deg, #2C2C2C 300deg, #3a3a3a 330deg, #2C2C2C 360deg)',
          }}
        >
          {/* Center hole */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-champagne/80 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-charcoal"></div>
            </div>
          </div>
        </div>

        {/* Play/Pause icon overlay */}
        <div className="relative z-10 text-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </button>
    </>
  );
}
