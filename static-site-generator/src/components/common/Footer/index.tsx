import { FrontmatterProps } from '~/types/frontmatterProps'

type FooterProps = {
  frontmatter: FrontmatterProps
}

export const Footer = ({ frontmatter }: FooterProps) => {
  return <footer className="LayoutFooter">フッター</footer>
}
