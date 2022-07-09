import { Header } from '~/components/common/Header'
import { Footer } from '~/components/common/Footer'
import { FrontmatterProps } from '~/types/frontmatterProps'

type LayoutDefaultProps = {
  frontmatter?: FrontmatterProps
  children: React.ReactNode
}

export const LayoutDefault = ({ frontmatter, children }: LayoutDefaultProps) => {
  return (
    <>
      <Header frontmatter={frontmatter} />
      <main className="LayoutMain">{children}</main>
      <Footer frontmatter={frontmatter} />
    </>
  )
}
