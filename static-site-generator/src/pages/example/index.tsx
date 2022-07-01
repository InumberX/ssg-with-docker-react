import { LayoutDefault } from '~/layouts/Base'
import { FrontmatterProps } from '~/types/frontmatterProps'

export const frontmatter: FrontmatterProps = {
  rootDir: '../',
  title: 'サンプル',
}

const PageHome = () => {
  return <LayoutDefault frontmatter={frontmatter}>下層ページ</LayoutDefault>
}

export default PageHome
