import { LayoutInner } from '~/components/ui/layouts/Inner'
import { routes } from '~/config/routes'
import { type Metadata } from '~/types/metadata'

type HeaderProps = {
  metadata: Metadata
  isLogoTitle?: boolean
}

export const Header = ({ metadata }: HeaderProps) => {
  return (
    <header className='LayoutHeader'>
      <LayoutInner>
        <div className='Container'>
          <ul className='Items'>
            <li className='Item'>
              <a
                href={routes.top.url({
                  rootDir: metadata.rootDir,
                })}
                className='Link'
              >
                トップページ
              </a>
            </li>
            <li className='Item'>
              <a
                href={routes.example.url({
                  rootDir: metadata.rootDir,
                })}
                className='Link'
              >
                下層ページ
              </a>
            </li>
          </ul>
        </div>
      </LayoutInner>
    </header>
  )
}
