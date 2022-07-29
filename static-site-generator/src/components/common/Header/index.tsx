import { FrontmatterProps } from '~/types/frontmatterProps'

type HeaderProps = {
  frontmatter: FrontmatterProps
}

type HeaderMenuInfoProps = {
  url: string
  label: string
}

export const Header = ({ frontmatter }: HeaderProps) => {
  const headerMenuInfos: HeaderMenuInfoProps[] = [
    {
      url: `${frontmatter.rootDir}`,
      label: 'トップ',
    },
    {
      url: `${frontmatter.rootDir}example/`,
      label: '下層',
    },
  ]

  return (
    <header className="LayoutHeader">
      <div className="HeaderMenu">
        <ul className="HeaderMenu__items">
          {headerMenuInfos.map((info, i) => {
            return (
              <li key={i} className="HeaderMenu__item">
                <a href={info.url} className="HeaderMenu__link">
                  <span className="HeaderMenu__linkText">{info.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
