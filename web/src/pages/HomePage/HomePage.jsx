import { Link, routes } from '@redwoodjs/router'
import { MetaTags, Head } from '@redwoodjs/web'
import Home from './views/home'
import Navbar  from '../../components/Navbar'

const HomePage = () => {
  // console.log("process.env.SUPABASE_URL: ", process.env.REDWOOD_ENV_SUPABASE_URL);
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
