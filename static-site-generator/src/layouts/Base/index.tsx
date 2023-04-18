import { ReactNode } from 'react'
import { Header } from '~/components/common/Header'
import { Footer } from '~/components/common/Footer'
import { FrontmatterProps } from '~/types/frontmatterProps'

type LayoutDefaultProps = {
  frontmatter?: FrontmatterProps
  children: ReactNode
  isLogoTitle?: boolean
}

export const LayoutDefault = ({ frontmatter, children, isLogoTitle }: LayoutDefaultProps) => {
  return (
    <>
      <Header frontmatter={frontmatter} isLogoTitle={isLogoTitle} />
      <main className="LayoutMain">{children}</main>
      <Footer frontmatter={frontmatter} />
    </>
  )
}
