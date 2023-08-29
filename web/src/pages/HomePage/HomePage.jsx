import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Home from './views/home'
import Navbar  from '../../components/Navbar'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Cordial" description="Cordial" />
{/* <Navbar /> */}
      <Home />
    </>
  )
}

export default HomePage
