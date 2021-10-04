import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

const SEO = ({ title, description, image, shouldExcludeTitleSuffix = false, shouldIndexPage = true }: SEOProps) => {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? ' | Rodrigo Godoy' : ''}`;
  const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`: null;
  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} /> }
      {pageImage && <meta name="image" content={pageImage} /> }

      { !shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:locale" content="pt_BR" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content={pageTitle} />
      <meta name="og:image" content={pageImage} />
      <meta name="og:image:secure_url" content={pageImage} />
      <meta name="og:image:alt" content="Thumbnail" />
      <meta name="og:image:type" content="image/png" />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rodrigogodoy__" />
      <meta name="twitter:creator" content="@rodrigogodoy__" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  )
}

export default SEO;
