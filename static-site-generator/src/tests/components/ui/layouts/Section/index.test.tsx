import { type RenderResult, cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'

import { LayoutSection } from '~/components/ui/layouts/Section'

describe('LayoutSection', () => {
  let result: RenderResult

  // テスト終了後の処理
  afterEach(() => {
    cleanup()
  })

  describe('標準（section要素）', () => {
    // テスト開始前の処理
    beforeEach(() => {
      result = render(
        <LayoutSection>
          <span className='TestChild'>test</span>
        </LayoutSection>,
      )
    })

    test('section要素として子要素が出力されている', () => {
      const section = result.container.querySelector('section.LayoutSection')
      expect(section).not.toBe(null)
      expect(section?.querySelector('.TestChild')?.textContent).toBe('test')
    })
  })

  describe('isNotSection', () => {
    // テスト開始前の処理
    beforeEach(() => {
      result = render(
        <LayoutSection isNotSection size='large' className='TestClass'>
          test
        </LayoutSection>,
      )
    })

    test('div要素として出力され、サイズとクラスが付与されている', () => {
      const section = result.container.querySelector('div.LayoutSection')
      expect(section).not.toBe(null)
      expect(result.container.querySelector('section')).toBe(null)
      expect(section?.classList.contains('LayoutSection--large')).toBe(true)
      expect(section?.classList.contains('TestClass')).toBe(true)
    })
  })
})
