import { Link, routes } from '@redwoodjs/router'
import { MetaTags, Head } from '@redwoodjs/web'
import Home from './views/home'
import Navbar  from '../../components/Navbar'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Cordial" description="Cordial" />
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png"  />
      </Head>
{/* <Navbar /> */}
      <Home />
    </>
  )
}

export default HomePage
