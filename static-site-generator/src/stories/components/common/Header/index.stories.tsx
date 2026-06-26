import type { Meta, StoryObj } from '@storybook/react-vite'

import { Header } from '~/components/common/Header'
import { type Metadata } from '~/types/metadata'

const metadata: Metadata = {
  rootDir: '/',
}

export default {
  title: 'components/common/Header',
  component: Header,
} as Meta<typeof Header>

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    metadata,
  },
}
