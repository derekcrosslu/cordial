import ReservasCell from 'src/components/Reserva/ReservasCell'
import { useAuth } from 'src/auth'
import { useEffect } from 'react'
import { Link, navigate, routes } from '@redwoodjs/router'

const ReservasPage = () => {
  const { isAuthenticated, signUp } = useAuth()
  console.log("isAuthenticated: ", isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("if isAuthenticated: ", isAuthenticated);
      // navigate(routes.login())
    }
  }, [isAuthenticated])
  return <ReservasCell />
}

export default ReservasPage
