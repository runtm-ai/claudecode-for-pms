'use client';

import { useEffect, useState } from 'react';

export function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const v = window.localStorage.getItem('ga-consent');
    if (!v) setShow(true);
  }, []);

  const decide = (yes: boolean) => {
    window.localStorage.setItem('ga-consent', yes ? 'yes' : 'no');
    if (yes) window.dispatchEvent(new Event('ga-consent-given'));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50 bg-white border-2 border-text rounded-lg shadow-anchor p-5">
      <p className="text-sm text-text">
        We use Google Analytics to learn which pages help most. No personal data.
        Cookies only fire after you accept.
      </p>
      <div className="flex gap-2 mt-3">
        <button onClick={() => decide(true)} className="btn-primary text-sm py-2">
          Accept
        </button>
        <button onClick={() => decide(false)} className="btn-secondary text-sm py-2">
          Decline
        </button>
      </div>
    </div>
  );
}
