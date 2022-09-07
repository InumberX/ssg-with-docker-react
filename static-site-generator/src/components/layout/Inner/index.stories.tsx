import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LayoutInner } from '.'

export default {
  title: 'components/layout/Inner',
  component: LayoutInner,
} as ComponentMeta<typeof LayoutInner>

export const Default: ComponentStory<typeof LayoutInner> = () => {
  return (
    <LayoutInner>
      <>
        コンテンツが入ります
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </>
    </LayoutInner>
  )
}
