import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FrontmatterProps } from '../../../types/frontmatterProps'
import { Footer } from '.'

const frontmatter: FrontmatterProps = {
  rootDir: '/',
}

export default {
  title: 'components/common/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = () => {
  return <Footer frontmatter={frontmatter} />
}
