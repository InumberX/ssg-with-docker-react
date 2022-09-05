import { FrontmatterProps } from '~/types/frontmatterProps'

type HeaderProps = {
  frontmatter: FrontmatterProps
}

export const Header = ({ frontmatter }: HeaderProps) => {
  const headerInfos = [
    {
      url: `${frontmatter.rootDir}`,
      text: 'トップ',
    },
    {
      url: `${frontmatter.rootDir}example/`,
      text: '下層',
    },
  ]

  return (
    <header className="LayoutHeader">
      <ul className="Header__items">
        {headerInfos.map((info, i) => {
          return (
            <li key={i} className="Header__item">
              <a href={info.url} className="Header__link">
                {info.text}
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
