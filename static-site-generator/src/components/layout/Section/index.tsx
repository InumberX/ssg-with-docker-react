import { ReactNode } from 'react'

type LayoutSectionProps = {
  children: ReactNode
  isNotSection?: boolean
  className?: string
}

export const LayoutSection = ({ children, isNotSection, className }: LayoutSectionProps) => {
  return isNotSection ? (
    <div className={`LayoutSection${className ? ' ' + className : ''}`}>{children}</div>
  ) : (
    <section className={`LayoutSection${className ? ' ' + className : ''}`}>{children}</section>
  )
}
