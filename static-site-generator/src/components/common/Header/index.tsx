import { FrontmatterProps } from '~/types/frontmatterProps'

type HeaderProps = {
  frontmatter: FrontmatterProps
}

export const Header = ({ frontmatter }: HeaderProps) => {
  return (
    <header className="LayoutHeader">
      <ul>
        <li>
          <a href={`${frontmatter.rootDir}`}>トップ</a>
        </li>
        <li>
          <a href={`${frontmatter.rootDir}example/`}>下層</a>
        </li>
      </ul>
    </header>
  )
}
