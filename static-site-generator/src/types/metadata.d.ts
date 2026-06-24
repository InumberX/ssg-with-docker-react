import { Lang } from '~/types/lang'

export type Metadata = {
  rootDir: string
  title?: string
  description?: string
  layout?: string
  noindex?: boolean
  draft?: boolean
  lang?: Lang
}
