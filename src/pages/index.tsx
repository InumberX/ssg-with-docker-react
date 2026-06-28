import { LayoutDefault } from '~/layouts/Base'
import { type Metadata } from '~/types/metadata'

export const metadata: Metadata = {
  rootDir: './',
}

const Page = () => {
  return <LayoutDefault metadata={metadata}>トップページ</LayoutDefault>
}

export default Page
