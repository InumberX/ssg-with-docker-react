import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LayoutSection } from '.'

export default {
  title: 'components/layout/Section',
  component: LayoutSection,
} as ComponentMeta<typeof LayoutSection>

export const Default: ComponentStory<typeof LayoutSection> = () => {
  return (
    <LayoutSection>
      <>
        コンテンツが入ります
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </>
    </LayoutSection>
  )
}
