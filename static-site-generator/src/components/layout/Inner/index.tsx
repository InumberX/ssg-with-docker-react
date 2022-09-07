import { ReactNode } from 'react'

type LayoutInnerProps = {
  children: ReactNode
  className?: string
}

export const LayoutInner = ({ children, className }: LayoutInnerProps) => {
  return <div className={`LayoutInner${className ? ' ' + className : ''}`}>{children}</div>
}
