'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

export function Analytics() {
  const [consented, setConsented] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    setConsented(window.localStorage.getItem('ga-consent') === 'yes');
    const handler = () => setConsented(true);
    window.addEventListener('ga-consent-given', handler);
    return () => window.removeEventListener('ga-consent-given', handler);
  }, []);

  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
