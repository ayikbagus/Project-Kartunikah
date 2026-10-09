import { useState, useEffect } from 'react';
import { getSanitizedParam } from './utils/sanitize';
import GateCover from './components/GateCover';
import VideoIntro from './components/VideoIntro';
import MusicPlayer from './components/MusicPlayer';
import CoupleSection from './components/CoupleSection';
import EventAgenda from './components/EventAgenda';
import Gallery from './components/Gallery';
import WishesRSVP from './components/WishesRSVP';
import DigitalGift from './components/DigitalGift';

export default function App() {
  const [gateOpen, setGateOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const guestName = getSanitizedParam('tamu');

  // Scroll-triggered animation observer
  useEffect(() => {
    if (!gateOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Delay to let DOM render
    const timer = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [gateOpen]);

  const handleOpenGate = () => {
    setGateOpen(true);
    setMusicPlaying(true);
  };

  return (
    <div className="min-h-screen bg-charcoal relative">


      {/* Konten Utama */}
      <div className="relative z-10">
        {/* Gate Cover */}
        {!gateOpen && (
          <GateCover guestName={guestName} onOpen={handleOpenGate} />
        )}

        {/* Main Content — after gate opens */}
        {gateOpen && (
          <div className="max-w-md mx-auto bg-cream min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Floating Music Player */}
            <MusicPlayer
              isPlaying={musicPlaying}
              onToggle={() => setMusicPlaying(!musicPlaying)}
            />

            {/* Video Opening Section — inline, permanent hero section */}
            <VideoIntro />

            {/* Hero / Opening */}
            <section className="pt-16 pb-12 px-6 text-center">
              <div className="animate-on-scroll">
                <p className="font-jakarta text-xs tracking-[0.3em] uppercase text-champagne mb-4">
                  The Wedding Of
                </p>
                <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-charcoal mb-3 leading-tight">
                  Bagus <span className="text-champagne">&amp;</span> Dinar
                </h1>
                <p className="font-cormorant text-lg text-muted italic">
                  20 Desember 2026
                </p>
              </div>

              {/* Quran Verse */}
              <div className="mt-10 animate-on-scroll">
                <div className="w-12 h-px bg-champagne/40 mx-auto mb-6"></div>
                <p className="quran-verse text-sm text-muted/80 leading-relaxed max-w-xs mx-auto">
                  "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
                  pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya,
                  dan dijadikan-Nya di antaramu rasa kasih dan sayang."
                </p>
                <p className="font-jakarta text-xs text-champagne mt-3 tracking-wider">
                  — QS. Ar-Rum: 21
                </p>
                <div className="w-12 h-px bg-champagne/40 mx-auto mt-6"></div>
              </div>
            </section>

            {/* Divider */}
            <div className="section-divider mx-6"></div>

            {/* The Couple */}
            <CoupleSection />

            {/* Divider */}
            <div className="section-divider mx-6"></div>

            {/* Event Agenda & Countdown */}
            <EventAgenda />

            {/* Divider */}
            <div className="section-divider mx-6"></div>

            {/* Gallery */}
            <Gallery />

            {/* Divider */}
            <div className="section-divider mx-6"></div>

            {/* Digital Gift */}
            <DigitalGift />

            {/* Divider */}
            <div className="section-divider mx-6"></div>

            {/* Wishes & RSVP */}
            <WishesRSVP guestName={guestName} />

            {/* Footer */}
            <footer className="py-12 px-6 text-center border-t border-champagne/10">
              <div className="animate-on-scroll">
                <p className="font-cormorant text-2xl font-bold text-charcoal mb-2">
                  Bagus &amp; Dinar
                </p>
                <p className="font-jakarta text-xs text-muted mb-6">
                  Terima kasih atas doa dan restu yang telah diberikan.
                </p>
                <div className="w-8 h-px bg-champagne/30 mx-auto mb-4"></div>
                <p className="font-jakarta text-[10px] text-muted/50 tracking-wider uppercase">
                  Made with ❤️
                </p>
              </div>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}

