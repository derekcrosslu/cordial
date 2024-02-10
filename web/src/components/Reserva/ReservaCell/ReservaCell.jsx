import Reserva from 'src/components/Reserva/Reserva'

export const QUERY = gql`
  query FindReservaById($id: Int!) {
    reserva: reserva(id: $id) {
      id
      createdAt
      updatedAt
      nombre
      area
      invitados
      # numeracion
      mesa
      fecha
      telefono
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Reserva not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ reserva }) => {
  return <Reserva reserva={reserva} />
}
