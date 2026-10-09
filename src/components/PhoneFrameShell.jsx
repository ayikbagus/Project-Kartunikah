import { useEffect, useState } from 'react';

export default function PhoneFrameShell() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('embed', '1');
    setUrl(currentUrl.toString());
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-charcoal relative">
      {/* Desktop Blurred Background (Cat Image) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/back.jpg')",
            filter: "blur(12px) grayscale(100%) sepia(60%) brightness(0.4) contrast(1.1)",
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-[#3a2f26]/30 mix-blend-multiply" />
      </div>

      {/* Mockup wrapper: explicit height → aspect-ratio computes width */}
      <div
        className="relative z-10"
        style={{
          height: 'calc(100dvh - 32px)',
          aspectRatio: '700 / 1409',
          maxWidth: '100vw',
        }}
      >
        {/* Iframe — sits behind the mockup image */}
        {url && (
          <iframe
            src={url}
            title="Wedding Invitation Mobile View"
            className="absolute z-0 bg-[#FAF8F5]"
            style={{
              left: '6.2857%',
              top: '2.2711%',
              width: '87.4286%',
              height: '95.3158%',
              borderRadius: '2.5rem',
              border: 'none',
            }}
            allow="autoplay; fullscreen"
          />
        )}

        {/* Mockup Image — on top, click-through */}
        <img
          src="/images/iphone-silver.webp"
          alt="iPhone Mockup"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
        />
      </div>
    </div>
  );
}
