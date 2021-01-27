/* eslint-disable react/no-danger */
import React from 'react';

const { GOOGLE_TAG_MANAGER } = process.env;

export const GoogleTagManagerScript = (): JSX.Element => (
  <>
    <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];` }} />
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER}');`,
      }}
    />
  </>
);

const styles: React.CSSProperties = {
  display: 'none',
  visibility: 'hidden',
};

export const GoogleTagManagerNoscript = (): JSX.Element => (
  <noscript>
    <iframe
      title="GTM"
      src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER}`}
      height={0}
      width={0}
      style={styles}
    />
  </noscript>
);
