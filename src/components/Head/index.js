import React from 'react';
import Head from 'next/head';

function IndexHome({
  // eslint-disable-next-line react/prop-types
  url, bg, title, description,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={bg} />

      <meta property="twitter:card" content={title} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={bg} />
    </Head>
  );
}

export default IndexHome;
