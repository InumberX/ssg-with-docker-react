import { LayoutDefault } from '~/layouts/Base'
import { FrontmatterProps } from '~/types/frontmatterProps'
import { LayoutSection } from '~/components/layout/Section'
import { LayoutInner } from '~/components/layout/Inner'

export const frontmatter: FrontmatterProps = {
  rootDir: '../',
  title: 'サンプル',
}

const Page = () => {
  return (
    <LayoutDefault frontmatter={frontmatter}>
      <LayoutSection isNotSection>
        <LayoutInner>
          <h1>下層ページ</h1>
        </LayoutInner>
      </LayoutSection>

      <LayoutSection>
        <LayoutInner>
          <h2>セクションタイトル</h2>
        </LayoutInner>
      </LayoutSection>
    </LayoutDefault>
  )
}

export default Page
