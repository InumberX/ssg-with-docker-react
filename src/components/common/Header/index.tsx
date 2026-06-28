import { PrimitiveButton } from '~/components/primitives/buttons/PrimitiveButton'
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
        <div className='LayoutHeader__container'>
          <ul className='LayoutHeader__items'>
            <li className='LayoutHeader__item'>
              <PrimitiveButton
                url={routes.top.url({
                  rootDir: metadata.rootDir,
                })}
                className='LayoutHeader__link'
              >
                トップページ
              </PrimitiveButton>
            </li>
            <li className='LayoutHeader__item'>
              <PrimitiveButton
                url={routes.example.url({
                  rootDir: metadata.rootDir,
                })}
                className='LayoutHeader__link'
              >
                下層ページ
              </PrimitiveButton>
            </li>
          </ul>
        </div>
      </LayoutInner>
    </header>
  )
}
