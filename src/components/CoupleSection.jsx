export default function CoupleSection() {
  const couple = [
    {
      name: 'Alexander Bagus Di Lorrenzo',
      shortName: 'Bagus',
      photo: '/images/cat men.jpg',
      parents: 'Putra dari Bpk. Eko & Ibu Dwi',
      instagram: '@4baguss',
      order: 'Putra Pertama',
    },
    {
      name: 'Dinar Paxley',
      shortName: 'Dinar',
      photo: '/images/catwomen.jpg',
      parents: 'Putri dari Bpk. H. Lestari & Ibu Hj. Dewi',
      instagram: '@dnarr.an',
      order: 'Putri Kedua',
    },
  ];

  return (
    <section id="couple" className="py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="font-jakarta text-xs tracking-[0.3em] uppercase text-champagne mb-3">
          Bismillahirrahmanirrahim
        </p>
        <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-charcoal mb-4">
          The Happiest Wedding
        </h2>
        <p className="font-jakarta text-sm text-muted leading-relaxed max-w-xs mx-auto">
          Assalamu'alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat dan ridho Allah SWT,
          kami bermaksud menyelenggarakan pernikahan putra-putri kami.
        </p>
      </div>

      {/* Couple Cards */}
      <div className="space-y-12">
        {couple.map((person, idx) => (
          <div
            key={person.shortName}
            className="flex flex-col items-center text-center animate-on-scroll"
          >
            {/* Photo Frame */}
            <div className="relative mb-6">
              {/* Outer ring */}
              <div className="w-44 h-44 rounded-full p-1 bg-gradient-to-br from-champagne via-champagne/60 to-champagne">
                <div className="w-full h-full rounded-full p-1 bg-cream">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-champagne/40"></div>
              <div className="absolute -bottom-1 -left-3 w-2 h-2 rounded-full bg-champagne/30"></div>
            </div>

            {/* Name */}
            <h3 className="font-cormorant text-2xl font-bold text-charcoal mb-1">
              {person.name}
            </h3>

            {/* Order */}
            <p className="font-jakarta text-xs tracking-wider uppercase text-champagne mb-2">
              {person.order}
            </p>

            {/* Parents */}
            <p className="font-jakarta text-sm text-muted mb-3">
              {person.parents}
            </p>

            {/* Instagram handle */}
            <a
              href={`https://instagram.com/${person.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-champagne hover:text-gold-hover
                transition-colors duration-200 font-jakarta text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              {person.instagram}
            </a>

            {/* Divider between couple cards */}
            {idx === 0 && (
              <div className="mt-10 flex flex-col items-center">
                <div className="w-px h-8 bg-champagne/30"></div>
                <div className="w-10 h-10 rounded-full border-2 border-champagne/40 flex items-center justify-center my-2">
                  <span className="font-cormorant text-xl text-champagne">&amp;</span>
                </div>
                <div className="w-px h-8 bg-champagne/30"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
