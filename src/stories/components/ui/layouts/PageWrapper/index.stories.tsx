import type { Meta, StoryObj } from '@storybook/react-vite'

import { LayoutPageWrapper } from '~/components/ui/layouts/PageWrapper'

export default {
  title: 'components/ui/layouts/PageWrapper',
  component: LayoutPageWrapper,
} as Meta<typeof LayoutPageWrapper>

type Story = StoryObj<typeof LayoutPageWrapper>

export const Default: Story = {
  render: (args) => {
    return (
      <LayoutPageWrapper {...args}>
        <>
          コンテンツが入ります
          <br />
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </>
      </LayoutPageWrapper>
    )
  },
}
