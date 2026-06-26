import { type RenderResult, cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'

import { Header } from '~/components/common/Header'
import { type Metadata } from '~/types/metadata'

describe('Header', () => {
  let result: RenderResult

  const metadata: Metadata = {
    rootDir: './',
  }

  // テスト終了後の処理
  afterEach(() => {
    cleanup()
  })

  describe('ルートページ', () => {
    // テスト開始前の処理
    beforeEach(() => {
      result = render(<Header metadata={metadata} />)
    })

    test('ナビゲーションのリンクが正常に出力されている', () => {
      const links = result.container.querySelectorAll('.LayoutHeader__link')
      expect(links.length).toBe(2)
      expect(links[0]?.textContent).toBe('トップページ')
      expect(links[1]?.textContent).toBe('下層ページ')
    })

    test('rootDirを基準にリンク先が設定されている', () => {
      const links = result.container.querySelectorAll('.LayoutHeader__link')
      expect(links[0]?.getAttribute('href')).toBe('./')
      expect(links[1]?.getAttribute('href')).toBe('./example')
    })
  })

  describe('下層ページ', () => {
    // テスト開始前の処理
    beforeEach(() => {
      result = render(<Header metadata={{ rootDir: '../' }} />)
    })

    test('rootDirに応じてリンク先が変化する', () => {
      const links = result.container.querySelectorAll('.LayoutHeader__link')
      expect(links[0]?.getAttribute('href')).toBe('../')
      expect(links[1]?.getAttribute('href')).toBe('../example')
    })
  })
})
