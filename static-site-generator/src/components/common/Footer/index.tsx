import { FrontmatterProps } from '~/types/frontmatterProps'

type FooterProps = {
  frontmatter: FrontmatterProps
}

export const Footer = ({
  // oxlint-disable-next-line no-unused-vars
  frontmatter,
}: FooterProps) => {
  return <footer className='LayoutFooter'>フッター</footer>
}
