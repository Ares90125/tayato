import React from 'react';
import Head from 'next/head';
import { HasSeoMeta } from '../../types/models/HasSeoMeta';

type HeadProps = Partial<HasSeoMeta['seoMeta']>;

const PageHead: React.FC<HeadProps> = ({
  title = 'Next/Typescript + Tailwind Css Project',
  description = 'This is test task from Coman. If I not implement perfect page, I am not hired. OMG!',
  keywords = 'Next, Typescript, Tailwind, css, project, test, card, navbar',
  thumbnail = '',
}) => {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} key="keywords" />
      <meta property="og:title" content={title} key="og:title" />
      {!!thumbnail && (
        <meta property="og:image" content={thumbnail} key="og:image" />
      )}
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta
        name="twitter:card"
        content={thumbnail ? 'summary_large_image' : 'summary'}
        key="twitter:card"
      />
    </Head>
  );
};

export default PageHead;
