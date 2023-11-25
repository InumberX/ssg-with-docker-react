import type { Meta, StoryObj } from '@storybook/react'
import { FrontmatterProps } from '../../../types/frontmatterProps'
import { Header } from '.'

const frontmatter: FrontmatterProps = {
  rootDir: '/',
}

export default {
  title: 'components/common/Header',
  component: Header,
} as Meta<typeof Header>

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    frontmatter,
  },
}
