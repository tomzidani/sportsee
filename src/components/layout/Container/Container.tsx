interface ContainerProps {
  children: any
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>
}
