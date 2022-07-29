import { LayoutDefault } from '~/layouts/Base'
import { FrontmatterProps } from '~/types/frontmatterProps'

export const frontmatter: FrontmatterProps = {
  rootDir: './',
}

const Page = () => {
  return <LayoutDefault frontmatter={frontmatter}>トップページ</LayoutDefault>
}

export default Page
