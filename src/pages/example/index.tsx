import { LayoutInner } from '~/components/ui/layouts/Inner'
import { LayoutSection } from '~/components/ui/layouts/Section'
import { LayoutDefault } from '~/layouts/Base'
import { type Metadata } from '~/types/metadata'

export const metadata: Metadata = {
  rootDir: '../',
  title: 'サンプル',
}

const Page = () => {
  return (
    <LayoutDefault metadata={metadata}>
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
