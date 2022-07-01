import type { MinistaLocation } from 'minista'
import { FrontmatterProps } from '~/types/frontmatterProps'

export type PageProps = {
  location: MinistaLocation
  frontmatter?: FrontmatterProps
}
