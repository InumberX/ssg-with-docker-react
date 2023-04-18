import { routes } from '~/config/routes'
import { FrontmatterProps } from '~/types/frontmatterProps'

type HeaderProps = {
  frontmatter: FrontmatterProps
  isLogoTitle?: boolean
}

export const Header = ({ frontmatter }: HeaderProps) => {
  return (
    <header className="LayoutHeader">
      <ul className="LayoutHeader__items">
        <li className="LayoutHeader__item">
          <a
            href={routes.top.url({
              rootDir: frontmatter.rootDir,
            })}
            className="LayoutHeader__link"
          >
            トップページ
          </a>
        </li>
        <li className="LayoutHeader__item">
          <a
            href={routes.example.url({
              rootDir: frontmatter.rootDir,
            })}
            className="LayoutHeader__link"
          >
            下層ページ
          </a>
        </li>
      </ul>
    </header>
  )
}
