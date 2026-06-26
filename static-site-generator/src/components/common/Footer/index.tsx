import { type Metadata } from '~/types/metadata'

type FooterProps = {
  metadata: Metadata
}

export const Footer = (_: FooterProps) => {
  return <footer className='LayoutFooter'>フッター</footer>
}
