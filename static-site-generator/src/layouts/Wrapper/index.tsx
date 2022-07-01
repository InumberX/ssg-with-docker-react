type LayoutWrapperProps = {
  children: React.ReactNode
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return <div className="LayoutWrapper">{children}</div>
}
