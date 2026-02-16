import { FrontmatterProps } from '~/types/frontmatterProps'

type FooterProps = {
  frontmatter: FrontmatterProps
}

export const Footer = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  frontmatter,
}: FooterProps) => {
  return <footer className='LayoutFooter'></footer>
}
