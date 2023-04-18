export const routes: {
  [key: string]: {
    id: string
    title: string
    description: string
    menuText: string
    url: ({ rootDir, id }: { rootDir: string; id?: number }) => string
  }
} = {
  // トップ
  top: {
    id: 'top',
    title: '',
    description: '',
    menuText: '',
    url: ({ rootDir }) => `${rootDir}`,
  },
  // テスト
  example: {
    id: 'example',
    title: '',
    description: '',
    menuText: '',
    url: ({ rootDir }) => `${rootDir}example`,
  },
}
