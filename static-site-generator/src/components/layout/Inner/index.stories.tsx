import type { Meta, StoryObj } from '@storybook/react'
import { LayoutInner } from '.'

export default {
  title: 'components/layout/Inner',
  component: LayoutInner,
} as Meta<typeof LayoutInner>

type Story = StoryObj<typeof LayoutInner>

export const Default: Story = {
  render: (args) => {
    return (
      <LayoutInner {...args}>
        <>
          コンテンツが入ります
          <br />
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </>
      </LayoutInner>
    )
  },
}
