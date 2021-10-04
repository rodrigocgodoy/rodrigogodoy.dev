import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document';
import { GoogleTagManagerNoscript, GoogleTagManagerScript } from '@components/googleTagManager';

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          <GoogleTagManagerScript />
        </Head>
        <body className="bg-black">
          <GoogleTagManagerNoscript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
