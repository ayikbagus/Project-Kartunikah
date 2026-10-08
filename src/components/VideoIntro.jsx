import { useEffect, useRef, useState } from 'react';

// KONFIGURASI HERO TEKS
const TEXT_START_SECONDS = 2.0; // Teks mulai muncul di detik ke-2
const TEXT_POS_CLASSES = "top-[30%]";
const TEXT_FALLBACK_MS = 6500; // Timer darurat 6.5 detik



/**
 * VideoIntro — Hero video section.
 * Renders as the first section in the normal page flow. Never unmounts.
 */
export default function VideoIntro() {
  const videoRef = useRef(null);
  const [isEnded, setIsEnded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showText, setShowText] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);

  // Fungsi aman untuk memunculkan teks hanya sekali
  const triggerText = (reason) => {
    setShowText((prev) => {
      if (!prev) {
        console.log(`[hero] showText=true via ${reason}`); // BISA DIHAPUS SETELAH BERHASIL
        return true;
      }
      return prev;
    });
  };

  useEffect(() => {
    // 1. Fallback Timer Anti-Gagal (muncul dalam 6 detik apapun yang terjadi)
    const fallbackTimer = setTimeout(() => {
      triggerText('timer fallback');
    }, TEXT_FALLBACK_MS);

    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Play failed — fallback to muted
        video.muted = true;
        const mutedPromise = video.play();
        if (mutedPromise !== undefined) {
          mutedPromise.catch(() => {
            // Muted play also failed
            setHasError(true);
            setIsEnded(true);
            triggerText('play error');
          });
        }
      });
    }

    return () => clearTimeout(fallbackTimer);
  }, []);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (showText || hasError) return;

    const video = videoRef.current;
    if (!video) return;

    // Jika durasi masih 0 atau NaN, abaikan timeupdate dan tunggu timer/ended
    if (!videoDuration || isNaN(videoDuration)) return;

    const triggerTime = TEXT_START_SECONDS !== null
      ? TEXT_START_SECONDS
      : videoDuration * 0.6;

    if (video.currentTime >= triggerTime) {
      triggerText('timeupdate');
    }
  };

  const handleVideoEnded = () => {
    setIsEnded(true);
    triggerText('ended');
  };

  const handleVideoError = () => {
    setHasError(true);
    setIsEnded(true);
    triggerText('video error');
  };

  return (
    <section className="relative w-full h-[100svh] bg-[#1a1612] overflow-hidden flex justify-center">
      {!hasError ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          onError={handleVideoError}
          poster="/videos/opening-poster.jpg"
        >
          <source src="/videos/opening.mp4?v=2" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-charcoal bg-[url('/videos/opening-poster.jpg')] bg-cover bg-center" />
      )}
      <style>{`
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-fade-up { animation: heroFadeUp 700ms ease-out both; }
  .hero-text-shadow { text-shadow: 0 1px 6px rgba(255, 248, 235, 0.8); }
  @media (prefers-reduced-motion: reduce) {
    .hero-fade-up { animation: none; }
  }
`}</style>

      {/* Text Overlay */}
      {showText && (
        <div className={`absolute left-0 w-full flex flex-col items-center justify-center text-center px-4 ${TEXT_POS_CLASSES} z-10 pointer-events-none`}>
          {/* 1. "The Wedding of" */}
          <p
            className="font-jakarta text-xs md:text-sm tracking-[0.3em] uppercase text-charcoal hero-text-shadow hero-fade-up"
            style={{ animationDelay: '0ms', animationFillMode: 'both' }}
          >
            The Wedding Of
          </p>

          {/* 2. "Bagus" */}
          <h2
            className="font-cormorant text-5xl md:text-6xl font-bold text-gold-hover mt-4 hero-text-shadow hero-fade-up"
            style={{ animationDelay: '500ms', animationFillMode: 'both' }}
          >
            Bagus
          </h2>

          {/* 3. "&" */}
          <span
            className="font-cormorant text-2xl md:text-3xl italic text-charcoal my-1 hero-text-shadow hero-fade-up"
            style={{ animationDelay: '1000ms', animationFillMode: 'both' }}
          >
            &amp;
          </span>

          {/* 4. "Dinar" */}
          <h2
            className="font-cormorant text-5xl md:text-6xl font-bold text-gold-hover hero-text-shadow hero-fade-up"
            style={{ animationDelay: '1500ms', animationFillMode: 'both' }}
          >
            Dinar
          </h2>

          {/* 5. "20 . 12 . 2026" */}
          <p
            className="font-jakarta text-xs md:text-sm tracking-[0.4em] text-charcoal mt-6 hero-text-shadow hero-fade-up"
            style={{ animationDelay: '2000ms', animationFillMode: 'both' }}
          >
            20 . 12 . 2026
          </p>
        </div>
      )}

      {/* Scroll indicator when video ends */}
      {isEnded && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce text-charcoal flex flex-col items-center">
            <svg className="w-8 h-8 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
