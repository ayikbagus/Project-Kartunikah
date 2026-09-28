import { useState, useEffect, useRef } from 'react';
import { sanitizeHTML, stripTags } from '../utils/sanitize';

export default function WishesRSVP({ guestName }) {
  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: 'Budi Santoso',
      attendance: 'Hadir',
      message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin 🤲',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: 2,
      name: 'Rina Permata',
      attendance: 'Hadir',
      message: 'Barakallahu lakuma wa baraka alaikuma! Semoga Allah senantiasa melimpahkan kebahagiaan untuk kalian berdua 💕',
      timestamp: new Date(Date.now() - 7200000).toISOString(),
    },
    {
      id: 3,
      name: 'Dewi Anggraini',
      attendance: 'Ragu-ragu',
      message: 'Happy wedding ya kak! Semoga jadi pasangan yang selalu kompak dan saling melengkapi ❤️',
      timestamp: new Date(Date.now() - 10800000).toISOString(),
    },
  ]);

  const [form, setForm] = useState({
    name: guestName || '',
    attendance: 'Hadir',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const feedRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    setIsSubmitting(true);

    // Sanitize all inputs
    const sanitizedWish = {
      id: Date.now(),
      name: stripTags(form.name.trim()),
      attendance: sanitizeHTML(form.attendance),
      message: stripTags(form.message.trim()),
      timestamp: new Date().toISOString(),
    };

    setTimeout(() => {
      setWishes((prev) => [sanitizedWish, ...prev]);
      setForm((prev) => ({ ...prev, message: '' }));
      setIsSubmitting(false);

      // Scroll feed to top
      if (feedRef.current) {
        feedRef.current.scrollTop = 0;
      }
    }, 500);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((w) => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  const getRelativeTime = (isoString) => {
    const diff = Date.now() - new Date(isoString).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Baru saja';
    if (minutes < 60) return `${minutes} menit lalu`;
    if (hours < 24) return `${hours} jam lalu`;
    return `${days} hari lalu`;
  };

  const attendanceBadge = {
    Hadir: { text: 'Hadir', class: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    'Ragu-ragu': { text: 'Ragu-ragu', class: 'bg-amber-50 text-amber-600 border-amber-200' },
    'Tidak Hadir': { text: 'Tidak Hadir', class: 'bg-rose-50 text-rose-600 border-rose-200' },
  };

  return (
    <section id="wishes" className="py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-10 animate-on-scroll">
        <p className="font-jakarta text-xs tracking-[0.3em] uppercase text-champagne mb-3">
          Wishes &amp; RSVP
        </p>
        <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Ucapan &amp; Doa
        </h2>
        <p className="font-jakarta text-sm text-muted">
          Berikan ucapan dan konfirmasi kehadiran Anda.
        </p>
      </div>

      {/* RSVP Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 p-6 rounded-2xl bg-white/60 backdrop-blur-sm
          border border-champagne/15 shadow-sm animate-on-scroll"
      >
        {/* Name Input */}
        <div className="mb-4">
          <label className="block font-jakarta text-xs tracking-wider uppercase text-muted mb-2">
            Nama Anda
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Masukkan nama Anda"
            maxLength={100}
            required
            className="w-full px-4 py-3 rounded-xl border border-champagne/20
              bg-white/80 font-jakarta text-sm text-charcoal
              placeholder:text-muted/50 focus:outline-none focus:border-champagne
              focus:ring-2 focus:ring-champagne/10 transition-all duration-200"
          />
        </div>

        {/* Attendance */}
        <div className="mb-4">
          <label className="block font-jakarta text-xs tracking-wider uppercase text-muted mb-3">
            Konfirmasi Kehadiran
          </label>
          <div className="flex gap-2">
            {['Hadir', 'Ragu-ragu', 'Tidak Hadir'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setForm({ ...form, attendance: option })}
                className={`flex-1 py-2.5 px-3 rounded-xl font-jakarta text-xs tracking-wide
                  border transition-all duration-200
                  ${
                    form.attendance === option
                      ? 'bg-champagne text-white border-champagne shadow-sm'
                      : 'bg-white/60 text-muted border-champagne/15 hover:border-champagne/30'
                  }`}
              >
                {option === 'Hadir' && '✓ '}
                {option === 'Ragu-ragu' && '~ '}
                {option === 'Tidak Hadir' && '✗ '}
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="mb-5">
          <label className="block font-jakarta text-xs tracking-wider uppercase text-muted mb-2">
            Ucapan &amp; Doa
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tulis ucapan dan doa untuk kedua mempelai..."
            maxLength={500}
            rows={3}
            required
            className="w-full px-4 py-3 rounded-xl border border-champagne/20
              bg-white/80 font-jakarta text-sm text-charcoal
              placeholder:text-muted/50 focus:outline-none focus:border-champagne
              focus:ring-2 focus:ring-champagne/10 transition-all duration-200 resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-champagne to-gold-hover
            text-white font-jakarta text-sm tracking-wider uppercase
            shadow-md shadow-champagne/20 hover:shadow-lg hover:shadow-champagne/30
            disabled:opacity-60 disabled:cursor-not-allowed
            transition-all duration-300"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              Mengirim...
            </span>
          ) : (
            'Kirim Ucapan'
          )}
        </button>
      </form>

      {/* Wishes Feed */}
      <div className="animate-on-scroll">
        <div className="flex items-center justify-between mb-4">
          <p className="font-jakarta text-xs tracking-wider uppercase text-muted">
            {wishes.length} Ucapan
          </p>
        </div>

        <div
          ref={feedRef}
          className="space-y-3 max-h-96 overflow-y-auto pr-1 custom-scrollbar"
        >
          {wishes.map((wish) => {
            const badge = attendanceBadge[wish.attendance] || attendanceBadge['Hadir'];
            return (
              <div
                key={wish.id}
                className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm
                  border border-champagne/10 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-champagne to-gold-hover
                    flex items-center justify-center flex-shrink-0">
                    <span className="font-jakarta text-xs font-bold text-white">
                      {getInitials(wish.name)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Name & Badge */}
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-jakarta text-sm font-semibold text-charcoal">
                        {wish.name}
                      </span>
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full
                          font-jakarta text-[10px] tracking-wide border ${badge.class}`}
                      >
                        {badge.text}
                      </span>
                    </div>

                    {/* Message */}
                    <p className="font-jakarta text-sm text-muted leading-relaxed mb-2">
                      {wish.message}
                    </p>

                    {/* Timestamp */}
                    <p className="font-jakarta text-[10px] text-muted/60">
                      {getRelativeTime(wish.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
