import Script from 'next/script';

export const GA = () => {
  return (
    <>
      <Script
        id="google-analytics-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-GML7H29BMS`}
      />
      <Script
        id="google-analytics-config"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GML7H29BMS', {
          page_path: window.location.pathname,
          });
          `,
        }}
      />
    </>
  );
};