import { useEffect, useState } from 'react';

export default function GateCover({ guestName, onOpen }) {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      onOpen();
    }, 800);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700
        ${closing ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
      style={{
        background: 'radial-gradient(ellipse at center, #FAF8F5 0%, #F5F0EB 40%, #EDE5DA 100%)',
      }}
    >
      {/* Decorative floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              background: '#C9A96E',
              left: `${15 + i * 14}%`,
              top: `${10 + (i % 3) * 30}%`,
              animation: `floatParticle ${4 + i}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative text-center px-6 max-w-sm mx-auto">
        {/* Top ornament */}
        <div className="flex justify-center mb-6">
          <svg width="120" height="40" viewBox="0 0 120 40" className="text-champagne opacity-60">
            <path d="M60 5 C40 5, 20 15, 5 25 C20 20, 40 18, 60 20 C80 18, 100 20, 115 25 C100 15, 80 5, 60 5Z" fill="currentColor" />
            <path d="M60 10 C45 10, 30 18, 15 28 C30 23, 45 22, 60 23 C75 22, 90 23, 105 28 C90 18, 75 10, 60 10Z" fill="currentColor" opacity="0.5" />
          </svg>
        </div>

        {/* The Wedding Of label */}
        <p className="font-jakarta text-xs tracking-[0.3em] uppercase text-champagne mb-4 animate-fadeIn">
          The Wedding Of
        </p>

        {/* Couple Initials */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fadeIn animation-delay-200">
          <span className="font-cormorant text-6xl md:text-7xl font-bold text-charcoal">B</span>
          <span className="font-cormorant text-4xl text-champagne">&amp;</span>
          <span className="font-cormorant text-6xl md:text-7xl font-bold text-charcoal">D</span>
        </div>

        {/* Couple Names */}
        <p className="font-cormorant text-xl text-charcoal/80 mb-8 animate-fadeIn animation-delay-300">
          Bagus &amp; Dinar
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-champagne/40 mx-auto mb-8"></div>

        {/* Guest greeting */}
        <div className="mb-8 animate-fadeIn animation-delay-400">
          <p className="font-jakarta text-xs tracking-wider uppercase text-muted mb-2">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <p className="font-cormorant text-2xl font-semibold text-charcoal">
            {guestName || 'Tamu Undangan'}
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleOpen}
          className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full
            bg-gradient-to-r from-champagne to-gold-hover text-white font-jakarta text-sm
            tracking-wider uppercase shadow-lg shadow-champagne/30
            hover:shadow-xl hover:shadow-champagne/40 hover:-translate-y-0.5
            transition-all duration-300 animate-fadeIn animation-delay-500 overflow-hidden"
        >
          <span className="absolute inset-0 shimmer-overlay"></span>
          <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Buka Undangan
        </button>

        {/* Bottom ornament */}
        <div className="flex justify-center mt-8">
          <svg width="120" height="40" viewBox="0 0 120 40" className="text-champagne opacity-60 rotate-180">
            <path d="M60 5 C40 5, 20 15, 5 25 C20 20, 40 18, 60 20 C80 18, 100 20, 115 25 C100 15, 80 5, 60 5Z" fill="currentColor" />
            <path d="M60 10 C45 10, 30 18, 15 28 C30 23, 45 22, 60 23 C75 22, 90 23, 105 28 C90 18, 75 10, 60 10Z" fill="currentColor" opacity="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
