import { Metadata } from '~/types/metadata'

type FooterProps = {
  metadata: Metadata
}

export const Footer = ({
  // oxlint-disable-next-line no-unused-vars
  metadata,
}: FooterProps) => {
  return <footer className='LayoutFooter'>フッター</footer>
}
