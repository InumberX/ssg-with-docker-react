import type { Meta, StoryObj } from '@storybook/react'
import { LayoutSection } from '.'

export default {
  title: 'components/layout/Section',
  component: LayoutSection,
} as Meta<typeof LayoutSection>

type Story = StoryObj<typeof LayoutSection>

export const Default: Story = {
  render: (args) => {
    return (
      <LayoutSection {...args}>
        <>
          コンテンツが入ります
          <br />
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </>
      </LayoutSection>
    )
  },
}
