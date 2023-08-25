import ReservasCell from 'src/components/Reserva/ReservasCell'
import { useAuth } from 'src/auth'
import { useEffect } from 'react'
import { Link, navigate, routes } from '@redwoodjs/router'

const ReservasPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.login())
    }
  }, [isAuthenticated])
  return <ReservasCell />
}

export default ReservasPage
