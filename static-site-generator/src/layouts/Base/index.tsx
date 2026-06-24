import { ReactNode } from 'react'

import { Footer } from '~/components/common/Footer'
import { Header } from '~/components/common/Header'
import { Metadata } from '~/types/metadata'

type LayoutDefaultProps = {
  metadata: Metadata
  children?: ReactNode
  isLogoTitle?: boolean
}

export const LayoutDefault = ({
  metadata,
  children,
  isLogoTitle,
}: LayoutDefaultProps) => {
  return (
    <>
      <Header metadata={metadata} isLogoTitle={isLogoTitle} />
      <main className='LayoutMain'>{children}</main>
      <Footer metadata={metadata} />
    </>
  )
}
