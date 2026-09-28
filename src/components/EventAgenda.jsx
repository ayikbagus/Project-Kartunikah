import CountdownTimer from './CountdownTimer';

export default function EventAgenda() {
  const events = [
    {
      title: 'Akad Nikah',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      date: 'Minggu, 20 Desember 2026',
      time: '08:00 - 10:00 WIB',
      venue: 'Masjid Agung Al-Aqsha Klaten',
      address: 'Jl. Mayor Sunaryo, Klaten Utara, Klaten, Jawa Tengah',
      mapsUrl: 'https://maps.app.goo.gl/iE1U2dhTgQ3iyDP76',
    },
    {
      title: 'Resepsi',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12 8.25a2.25 2.25 0 01-2.25-2.25V4.5a2.25 2.25 0 014.5 0v1.5A2.25 2.25 0 0112 8.25z" />
        </svg>
      ),
      date: 'Minggu, 20 Desember 2026',
      time: '11:00 - 14:00 WIB',
      venue: 'Swissôtel Nusantara',
      address: 'Bumi Harapan, Penajam Paser Utara, Kalimantan TImur',
      mapsUrl: 'https://maps.app.goo.gl/5UTSzcoRGEPaWh246',
    },
  ];

  return (
    <section id="event" className="py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-8 animate-on-scroll">
        <p className="font-jakarta text-xs tracking-[0.3em] uppercase text-champagne mb-3">
          Save The Date
        </p>
        <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Waktu &amp; Tempat
        </h2>
        <p className="font-jakarta text-sm text-muted">
          Dengan penuh suka cita, kami mengundang Anda untuk hadir di acara pernikahan kami.
        </p>
      </div>

      {/* Countdown */}
      <CountdownTimer />

      {/* Event Cards */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.title}
            className="relative rounded-2xl bg-white/60 backdrop-blur-sm
              border border-champagne/15 shadow-sm overflow-hidden animate-on-scroll"
          >
            {/* Gold left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-champagne to-champagne/40"></div>

            <div className="p-6 pl-7">
              {/* Event Title Row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center text-champagne">
                  {event.icon}
                </div>
                <h3 className="font-cormorant text-xl font-bold text-charcoal">
                  {event.title}
                </h3>
              </div>

              {/* Date & Time */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-muted">
                  <svg className="w-4 h-4 text-champagne flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span className="font-jakarta text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <svg className="w-4 h-4 text-champagne flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-jakarta text-sm">{event.time}</span>
                </div>
                <div className="flex items-start gap-2 text-muted">
                  <svg className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="font-jakarta text-sm font-medium text-charcoal">{event.venue}</p>
                    <p className="font-jakarta text-xs text-muted mt-0.5">{event.address}</p>
                  </div>
                </div>
              </div>

              {/* Maps Button */}
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                  border border-champagne/30 text-champagne hover:bg-champagne hover:text-white
                  font-jakarta text-xs tracking-wider uppercase
                  transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m0 0l3-3m-3 3l-3-3m12-1.5V15m0 0l3-3m-3 3l-3-3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Petunjuk Arah
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
