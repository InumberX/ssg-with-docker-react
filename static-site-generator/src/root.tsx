import type { MinistaLocation } from 'minista'
import { Head } from 'minista'
import siteInfo from '~/config/siteInfo.json'
import { LayoutWrapper } from '~/layouts/Wrapper'
import { FrontmatterProps } from '~/types/frontmatterProps'

type RootProps = {
  location: MinistaLocation
  frontmatter?: FrontmatterProps
  children: React.ReactNode
}

const Root = ({ location, frontmatter, children }: RootProps) => {
  const site = siteInfo.site
  const siteTitle = site.title
  const siteDescription = site.description
  const siteUrl = site.url
  const title = frontmatter?.title ? `${frontmatter?.title} | ${siteTitle}` : siteTitle
  const ogUrl = `${siteUrl}${location.pathname}`
  const ogImage = siteUrl + '/assets/images/ogp.png'
  const ogType = location.pathname === '/' ? 'website' : 'article'
  const twitterCard = 'summary_large_image'
  const twitterId = site.twitter?.id ? `@${site.twitter.id}` : ''
  const noindex = frontmatter?.noindex || false
  const favicon = `${frontmatter.rootDir}assets/img/favicon.png`
  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no,shrink-to-fit=no,viewport-fit=cover"
        />
        <title>{title}</title>
        <meta name="description" content={siteDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content={ogType} />
        <meta name="twitter:card" content={twitterCard} />
        {twitterId && <meta name="twitter:creator" content={twitterId} />}
        {noindex && <meta name="robots" content="noindex" />}
        <link rel="icon" href={favicon} />
        <link rel="canonical" href={ogUrl} />
      </Head>
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  )
}

export default Root
