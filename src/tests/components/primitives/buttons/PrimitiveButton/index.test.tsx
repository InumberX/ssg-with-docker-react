import { type RenderResult, cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'

import { PrimitiveButton } from '~/components/primitives/buttons/PrimitiveButton'

describe('PrimitiveButton', () => {
  let result: RenderResult

  // テスト終了後の処理
  afterEach(() => {
    cleanup()
  })

  //============================================================================
  // 1. Input/Output
  //============================================================================
  describe('Input/Output', () => {
    describe('標準ボタン', () => {
      beforeEach(() => {
        result = render(<PrimitiveButton>test</PrimitiveButton>)
      })

      test('children が正常に出力されている', () => {
        const button = result.container.querySelector('button')
        expect(button).not.toBe(null)
        expect(button?.textContent).toBe('test')
      })

      test('type が正常に付与されている', () => {
        const button = result.container.querySelector('button')
        expect(button?.getAttribute('type')).toEqual('button')
      })
    })

    describe('submitボタン', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton buttonType='submit'>test</PrimitiveButton>,
        )
      })

      test('type が正常に付与されている', () => {
        const button = result.container.querySelector('button')
        expect(button?.getAttribute('type')).toEqual('submit')
      })
    })

    describe('resetボタン', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton buttonType='reset'>test</PrimitiveButton>,
        )
      })

      test('type が正常に付与されている', () => {
        const button = result.container.querySelector('button')
        expect(button?.getAttribute('type')).toEqual('reset')
      })
    })

    describe('name と value 属性', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton name='testName' value='testValue'>
            test
          </PrimitiveButton>,
        )
      })

      test('name と value 属性が正常に付与されている', () => {
        const button = result.container.querySelector('button')
        expect(button?.getAttribute('name')).toEqual('testName')
        expect(button?.getAttribute('value')).toEqual('testValue')
      })
    })

    describe('title 属性', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton title='クリックして保存'>保存</PrimitiveButton>,
        )
      })

      test('title が正常に付与されている', () => {
        const button = result.container.querySelector('button')
        expect(button?.getAttribute('title')).toEqual('クリックして保存')
      })
    })

    describe('ARIA 属性', () => {
      describe('aria-label', () => {
        beforeEach(() => {
          result = render(
            <PrimitiveButton ariaLabel='閉じる'>×</PrimitiveButton>,
          )
        })

        test('aria-label が正常に付与されている', () => {
          const button = result.container.querySelector('button')
          expect(button?.getAttribute('aria-label')).toEqual('閉じる')
        })
      })

      describe('aria-controls', () => {
        beforeEach(() => {
          result = render(
            <PrimitiveButton ariaControls='menu-1'>Menu</PrimitiveButton>,
          )
        })

        test('aria-controls が正常に付与されている', () => {
          const button = result.container.querySelector('button')
          expect(button?.getAttribute('aria-controls')).toEqual('menu-1')
        })
      })

      describe('aria-selected', () => {
        beforeEach(() => {
          result = render(<PrimitiveButton ariaSelected>Tab 1</PrimitiveButton>)
        })

        test('aria-selected が正常に付与されている', () => {
          const button = result.container.querySelector('button')
          expect(button?.getAttribute('aria-selected')).toEqual('true')
        })
      })
    })

    describe('role 属性', () => {
      beforeEach(() => {
        result = render(<PrimitiveButton role='tab'>Tab</PrimitiveButton>)
      })

      test('role が正常に付与されている', () => {
        const button = result.container.querySelector('button')
        expect(button?.getAttribute('role')).toEqual('tab')
      })
    })

    describe('tabIndex 属性', () => {
      beforeEach(() => {
        result = render(<PrimitiveButton tabIndex={-1}>Button</PrimitiveButton>)
      })

      test('tabIndex が正常に付与されている', () => {
        const button = result.container.querySelector('button')
        expect(button?.getAttribute('tabindex')).toEqual('-1')
      })
    })

    describe('複数の ARIA 属性', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton
            role='tab'
            ariaLabel='ホームタブ'
            ariaControls='panel-1'
            ariaSelected
          >
            Home
          </PrimitiveButton>,
        )
      })

      test('複数の ARIA 属性が同時に付与される', () => {
        const button = result.container.querySelector('button')
        expect(button?.getAttribute('role')).toEqual('tab')
        expect(button?.getAttribute('aria-label')).toEqual('ホームタブ')
        expect(button?.getAttribute('aria-controls')).toEqual('panel-1')
        expect(button?.getAttribute('aria-selected')).toEqual('true')
      })
    })
  })

  //============================================================================
  // 2. Display
  //============================================================================
  describe('Display', () => {
    describe('非活性ボタン', () => {
      beforeEach(() => {
        result = render(<PrimitiveButton isDisabled>test</PrimitiveButton>)
      })

      test('disabled 属性が正常に付与されている', () => {
        const button = result.container.querySelector('button')
        expect(button?.getAttribute('disabled')).toEqual('')
      })

      test('非活性スタイルが適用されている', () => {
        const button = result.container.querySelector('button')
        expect(button?.className).toContain('PrimitiveButton--disabled')
      })
    })

    describe('カスタムクラス名', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton className='TestClass'>test</PrimitiveButton>,
        )
      })

      test('カスタムクラス名が正常に付与されている', () => {
        const button = result.container.querySelector('button')
        expect(button?.classList.contains('TestClass')).toBe(true)
      })
    })
  })

  //============================================================================
  // 3. Operation
  //============================================================================
  describe('Operation', () => {
    describe('内部リンクボタン', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton url='/internal/path'>test</PrimitiveButton>,
        )
      })

      test('a タグが使用されている', () => {
        const link = result.container.querySelector('a')
        expect(link).not.toBe(null)
        expect(link?.getAttribute('href')).toEqual('/internal/path')
      })

      test('button 要素はレンダリングされない', () => {
        const button = result.container.querySelector('button')
        expect(button).toBe(null)
      })
    })

    describe('外部リンクボタン（https）', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton url='https://example.com'>test</PrimitiveButton>,
        )
      })

      test('a タグが使用されている', () => {
        const link = result.container.querySelector('a')
        expect(link).not.toBe(null)
        expect(link?.getAttribute('href')).toEqual('https://example.com')
      })
    })

    describe('外部リンクボタン（http）', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton url='http://example.com'>test</PrimitiveButton>,
        )
      })

      test('a タグが使用されている', () => {
        const link = result.container.querySelector('a')
        expect(link).not.toBe(null)
        expect(link?.getAttribute('href')).toEqual('http://example.com')
      })
    })

    describe('別タブで開く外部リンクボタン', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton
            url='https://example.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            test
          </PrimitiveButton>,
        )
      })

      test('target と rel 属性が正常に付与されている', () => {
        const link = result.container.querySelector('a')
        expect(link?.getAttribute('target')).toEqual('_blank')
        expect(link?.getAttribute('rel')).toEqual('noopener noreferrer')
      })
    })

    describe('ハッシュリンクボタン', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton url='#section-1'>test</PrimitiveButton>,
        )
      })

      test('a タグが使用されている', () => {
        const link = result.container.querySelector('a')
        expect(link).not.toBe(null)
        expect(link?.getAttribute('href')).toEqual('#section-1')
      })

      test('button 要素はレンダリングされない', () => {
        const button = result.container.querySelector('button')
        expect(button).toBe(null)
      })
    })

    describe('非活性リンクボタン', () => {
      beforeEach(() => {
        result = render(
          <PrimitiveButton url='https://example.com' isDisabled>
            test
          </PrimitiveButton>,
        )
      })

      test('非活性スタイルが適用されている', () => {
        const link = result.container.querySelector('a')
        expect(link?.className).toContain('PrimitiveButton--disabled')
      })
    })
  })

  //============================================================================
  // 4. Validation (for forms)
  //============================================================================
  describe.skip('Validation', () => {})

  //============================================================================
  // 5. Others (Optional)
  //============================================================================
  describe.skip('Others (Optional)', () => {})
})
