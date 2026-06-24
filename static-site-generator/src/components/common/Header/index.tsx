import { routes } from '~/config/routes'
import { type Metadata } from '~/types/metadata'

type HeaderProps = {
  metadata: Metadata
  isLogoTitle?: boolean
}

export const Header = ({ metadata }: HeaderProps) => {
  return (
    <header className='LayoutHeader'>
      <ul className='LayoutHeader__items'>
        <li className='LayoutHeader__item'>
          <a
            href={routes.top.url({
              rootDir: metadata.rootDir,
            })}
            className='LayoutHeader__link'
          >
            トップページ
          </a>
        </li>
        <li className='LayoutHeader__item'>
          <a
            href={routes.example.url({
              rootDir: metadata.rootDir,
            })}
            className='LayoutHeader__link'
          >
            下層ページ
          </a>
        </li>
      </ul>
    </header>
  )
}
