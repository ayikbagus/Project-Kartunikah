import { useState } from 'react';

/**
 * Bank account data — edit this array to update account details.
 * Each entry: { bank, logo (SVG or text), accountNumber, accountName }
 */
const BANK_ACCOUNTS = [
  {
    bank: 'Seabank Indonesia',
    bankShort: 'SB',
    color: '#FF7518',
    accountNumber: '005001855418',
    accountName: 'Bagus',
  },
  {
    bank: 'Bank Syariah Indonesia',
    bankShort: 'BSI',
    color: '#00A650',
    accountNumber: '9876543210',
    accountName: 'Dinar',
  },
];

function BankCard({ account }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(account.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = account.accountNumber;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-champagne/15 shadow-sm overflow-hidden">
      {/* Bank Header */}
      <div
        className="px-5 py-3 flex items-center gap-3"
        style={{ background: `${account.color}10` }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-jakarta text-xs font-bold tracking-wide shadow-sm"
          style={{ backgroundColor: account.color }}
        >
          {account.bankShort}
        </div>
        <div>
          <p className="font-jakarta text-sm font-semibold text-charcoal">{account.bank}</p>
          <p className="font-jakarta text-[10px] text-muted tracking-wide">Rekening Tabungan</p>
        </div>
      </div>

      {/* Account Details */}
      <div className="px-5 py-4">
        {/* Account Number */}
        <div className="mb-3">
          <p className="font-jakarta text-[10px] tracking-wider uppercase text-muted mb-1">
            Nomor Rekening
          </p>
          <p className="font-cormorant text-2xl font-bold text-charcoal tracking-wider">
            {account.accountNumber}
          </p>
        </div>

        {/* Account Name */}
        <div className="mb-4">
          <p className="font-jakarta text-[10px] tracking-wider uppercase text-muted mb-1">
            Atas Nama
          </p>
          <p className="font-jakarta text-sm font-medium text-charcoal">
            {account.accountName}
          </p>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl
            font-jakarta text-xs tracking-wider uppercase
            border transition-all duration-300
            ${copied
              ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
              : 'bg-white/80 border-champagne/25 text-champagne hover:bg-champagne hover:text-white hover:border-champagne'
            }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Tersalin!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
              Salin No. Rekening
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function DigitalGift() {
  return (
    <section id="gift" className="py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-10 animate-on-scroll">
        <p className="font-jakarta text-xs tracking-[0.3em] uppercase text-champagne mb-3">
          Wedding Gift
        </p>
        <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Amplop Digital
        </h2>
        <p className="font-jakarta text-sm text-muted leading-relaxed max-w-xs mx-auto">
          Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih
          untuk kedua mempelai, dapat melalui rekening berikut.
        </p>
      </div>

      {/* Gift Icon */}
      <div className="flex justify-center mb-8 animate-on-scroll">
        <div className="w-16 h-16 rounded-full bg-champagne/10 flex items-center justify-center">
          <svg className="w-7 h-7 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div>
      </div>

      {/* Bank Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-on-scroll">
        {BANK_ACCOUNTS.map((account) => (
          <BankCard key={account.accountNumber} account={account} />
        ))}
      </div>

      {/* Thank you note */}
      <div className="text-center mt-8 animate-on-scroll">
        <p className="font-jakarta text-xs text-muted/70 italic">
          Terima kasih atas perhatian dan kebaikan Anda 🤍
        </p>
      </div>
    </section>
  );
}
