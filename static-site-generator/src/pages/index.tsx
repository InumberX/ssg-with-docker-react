import { LayoutDefault } from '~/layouts/Base'
import { FrontmatterProps } from '~/types/frontmatterProps'
import { LayoutInner } from '~/components/layout/Inner'

export const frontmatter: FrontmatterProps = {
  rootDir: './',
}

const PageHome = () => {
  return (
    <LayoutDefault frontmatter={frontmatter}>
      <LayoutInner>トップページ</LayoutInner>
    </LayoutDefault>
  )
}

export default PageHome
