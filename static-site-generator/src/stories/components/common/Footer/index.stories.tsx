import type { Meta, StoryObj } from '@storybook/react-vite'

import { Footer } from '~/components/common/Footer'
import { FrontmatterProps } from '~/types/frontmatterProps'

const frontmatter: FrontmatterProps = {
  rootDir: '/',
}

export default {
  title: 'components/common/Footer',
  component: Footer,
} as Meta<typeof Footer>

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    frontmatter,
  },
}
