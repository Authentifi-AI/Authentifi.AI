import Head from "next/head"
import { siteConfig } from "@/lib/config"

interface MetaProps {
  title?: string
  description?: string
  image?: string
  type?: string
  date?: string
}

export function Meta({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  type = "website",
  date,
}: MetaProps) {
  const metaTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      {date && <meta property="article:published_time" content={date} />}
    </Head>
  )
}
