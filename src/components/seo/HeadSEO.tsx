import { Helmet } from "react-helmet-async"


interface Props {
  title: string;
  description: string;
  keywords: string;
}

export const HeadSEO = ({ title, description, keywords }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description"
        content={description} />
      <meta name="keywords"
        content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description"
        content={description} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description"
        content={description} />
    </Helmet>
  )
}
