import type { Meta, StoryObj } from '@storybook/react-vite'

import { PrimitiveButton } from '~/components/primitives/buttons/PrimitiveButton'

const meta: Meta<typeof PrimitiveButton> = {
  title: 'components/primitives/buttons/PrimitiveButton',
  component: PrimitiveButton,
}
export default meta

type Story = StoryObj<typeof PrimitiveButton>

export const Button: Story = {
  args: {
    children: 'Button',
  },
}

export const ButtonSubmit: Story = {
  args: {
    children: 'Button',
    buttonType: 'submit',
  },
}

export const ButtonDisabled: Story = {
  args: {
    children: 'Button',
    isDisabled: true,
  },
}

export const Link: Story = {
  args: {
    children: 'Link',
    url: 'https://example.com',
  },
}

export const LinkDisabled: Story = {
  args: {
    children: 'Link',
    url: 'https://example.com',
    isDisabled: true,
  },
}

export const LinkExternal: Story = {
  args: {
    children: 'Link',
    url: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
}

export const LinkExternalDisabled: Story = {
  args: {
    children: 'Link',
    url: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    isDisabled: true,
  },
}
