import { LayoutInner } from '~/components/ui/layouts/Inner'
import { LayoutSection } from '~/components/ui/layouts/Section'
import { LayoutDefault } from '~/layouts/Base'
import { type Metadata } from '~/types/metadata'

export const metadata: Metadata = {
  rootDir: './',
}

const Page = () => {
  return (
    <LayoutDefault metadata={metadata}>
      <LayoutSection>
        <LayoutInner>
          <h1>トップページ</h1>
        </LayoutInner>
      </LayoutSection>
    </LayoutDefault>
  )
}

export default Page
