import "tailwindcss/tailwind.css";
import React from "react";
import NextNprogress from 'nextjs-progressbar';
import SEO from "../shared/components/Seo";

const utilitySuccess = '#DAA600';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color={utilitySuccess}
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        options={{
          showSpinner: false,
        }}
      />
      <SEO title="Site" description="Seja bem vindo a página Rodrigo Godoy Dev, aqui você encontra todo tipo de conteúdo dentro do REACT" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
