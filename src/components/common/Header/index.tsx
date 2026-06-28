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
        <div className='Container'>
          <ul className='Items'>
            <li className='Item'>
              <PrimitiveButton
                url={routes.top.url({
                  rootDir: metadata.rootDir,
                })}
                className='Link'
              >
                トップページ
              </PrimitiveButton>
            </li>
            <li className='Item'>
              <PrimitiveButton
                url={routes.example.url({
                  rootDir: metadata.rootDir,
                })}
                className='Link'
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
