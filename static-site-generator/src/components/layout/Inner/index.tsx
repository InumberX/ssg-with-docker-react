import { ReactNode } from 'react'

type LayoutInnerProps = {
  children: ReactNode
}

export const LayoutInner = ({ children }: LayoutInnerProps) => {
  return <div className="LayoutInner">{children}</div>
}
