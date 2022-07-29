import LangType from '~/types/langType'

export type FrontmatterProps = {
  rootDir: string
  title?: string
  description?: string
  layout?: string
  noindex?: boolean
  draft?: boolean
  langType?: LangType
}
