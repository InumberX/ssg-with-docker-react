import { Head } from 'minista/head'
import { ReactNode } from 'react'

import { LayoutPageWrapper } from '~/components/ui/layouts/PageWrapper'
import siteInfo from '~/config/siteInfo.json'
import { Metadata } from '~/types/metadata'

type LayoutProps = Metadata & {
  url?: string
  children?: ReactNode
}

const Layout = ({
  url,
  title,
  description,
  noindex,
  rootDir,
  lang,
  children,
}: LayoutProps) => {
  const site = siteInfo.site
  const siteTitle = site.title
  const siteDescription = site.description
  const siteUrl = site.url
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const pageDescription = description || siteDescription
  const ogUrl = `${siteUrl}${url}`
  const ogImage = siteUrl + '/assets/images/ogp.png'
  const ogType = url === '/' ? 'website' : 'article'
  const twitterCard = 'summary_large_image'
  const twitterId = site.twitter?.id ? `@${site.twitter.id}` : ''
  const isNoindex = noindex || false
  const favicon = `${rootDir}favicon.png`
  return (
    <>
      <Head htmlAttributes={{ lang: lang || 'ja' }}>
        <meta name='format-detection' content='telephone=no' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no,shrink-to-fit=no,viewport-fit=cover'
        />
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:url' content={ogUrl} />
        <meta property='og:image' content={ogImage} />
        <meta property='og:site_name' content={siteTitle} />
        <meta property='og:type' content={ogType} />
        <meta name='twitter:card' content={twitterCard} />
        {twitterId && <meta name='twitter:creator' content={twitterId} />}
        {isNoindex && <meta name='robots' content='noindex' />}
        <link rel='icon' href={favicon} />
        <link rel='canonical' href={ogUrl} />
        <link rel='stylesheet' href='/src/assets/css/style.css' />
        <script src={`${rootDir}assets/js/lib/jquery.min.js`} defer />
        <script src={`${rootDir}assets/js/common.js`} defer />
      </Head>
      <LayoutPageWrapper>{children}</LayoutPageWrapper>
    </>
  )
}

export default Layout
