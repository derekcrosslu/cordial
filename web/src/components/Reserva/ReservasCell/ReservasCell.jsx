import { Link, routes } from '@redwoodjs/router'

import Reservas from 'src/components/Reserva/Reservas'

export const QUERY = gql`
  query FindReservas {
    reservas {
      id
      createdAt
      updatedAt
      nombre
      area
      invitados
      numeracion
      mesa
      fecha
      telefono
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No reservas yet. '}
      <Link to={routes.newReserva()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ reservas }) => {
  return <Reservas reservas={reservas} />
}
