import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const WEDDING_DATE = new Date('2026-12-20T08:00:00+07:00').getTime();

  const calculateTimeLeft = () => {
    const now = Date.now();
    const diff = WEDDING_DATE - now;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Hari' },
    { value: timeLeft.hours, label: 'Jam' },
    { value: timeLeft.minutes, label: 'Menit' },
    { value: timeLeft.seconds, label: 'Detik' },
  ];

  return (
    <div className="flex justify-center gap-3 mb-12 animate-on-scroll">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center min-w-[70px] py-4 px-2 rounded-2xl
            bg-white/60 backdrop-blur-sm border border-champagne/20 shadow-sm"
        >
          <span className="font-cormorant text-3xl md:text-4xl font-bold text-charcoal leading-none mb-1">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="font-jakarta text-[10px] tracking-wider uppercase text-champagne">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
