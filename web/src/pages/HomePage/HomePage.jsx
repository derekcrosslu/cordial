import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Home from './views/home'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Cordial" description="Cordial" />

      <Home />
    </>
  )
}

export default HomePage
