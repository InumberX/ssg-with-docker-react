import { LayoutDefault } from '~/layouts/Base'
import { Metadata } from '~/types/metadata'

export const metadata: Metadata = {
  rootDir: './',
}

const Page = () => {
  return <LayoutDefault metadata={metadata}>トップページ</LayoutDefault>
}

export default Page
