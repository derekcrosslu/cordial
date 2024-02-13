import { useAuth } from 'src/auth'
import { navigate, routes } from '@redwoodjs/router'

const SignoutBtn = () => {
  const { logOut } = useAuth()

  const onClick = async () => {
    await logOut()
    navigate(routes.home())
  }

  return <button className='rw-button rw-button-green' onClick={() => onClick()}>Sign Out</button>
}

export default SignoutBtn
