import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FrontmatterProps } from '../../../types/frontmatterProps'
import { Header } from '.'

const frontmatter: FrontmatterProps = {
  rootDir: '/',
}

export default {
  title: 'components/common/Header',
  component: Header,
} as ComponentMeta<typeof Header>

export const Default: ComponentStory<typeof Header> = () => {
  return <Header frontmatter={frontmatter} />
}
