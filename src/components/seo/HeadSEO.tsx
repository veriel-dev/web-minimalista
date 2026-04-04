import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  keywords: string;
  noIndex?: boolean;
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;
}

export const HeadSEO = ({
  title,
  description,
  keywords,
  noIndex = false,
  ogType,
  ogUrl,
  ogImage,
}: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogType && <meta property="og:type" content={ogType} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};
