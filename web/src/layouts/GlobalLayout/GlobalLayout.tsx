import Navigation from 'src/components/Navigation/Navigation'

type GlobalLayoutProps = {
  children?: React.ReactNode
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  )
}

export default GlobalLayout
