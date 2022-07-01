import { LayoutDefault } from '~/layouts/Base'
import { FrontmatterProps } from '~/types/frontmatterProps'

export const frontmatter: FrontmatterProps = {
  rootDir: './',
}

const PageHome = () => {
  return <LayoutDefault frontmatter={frontmatter}>トップページ</LayoutDefault>
}

export default PageHome
