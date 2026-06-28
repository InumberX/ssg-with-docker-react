import { LayoutInner } from '~/components/ui/layouts/Inner'
import { type Metadata } from '~/types/metadata'

type FooterProps = {
  metadata: Metadata
}

export const Footer = (_: FooterProps) => {
  return (
    <footer className='LayoutFooter'>
      <LayoutInner>フッター</LayoutInner>
    </footer>
  )
}
