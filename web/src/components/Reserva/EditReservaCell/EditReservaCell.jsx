import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ReservaForm from 'src/components/Reserva/ReservaForm'

export const QUERY = gql`
  query EditReservaById($id: Int!) {
    reserva: reserva(id: $id) {
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
const UPDATE_RESERVA_MUTATION = gql`
  mutation UpdateReservaMutation($id: Int!, $input: UpdateReservaInput!) {
    updateReserva(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ reserva }) => {
  const [updateReserva, { loading, error }] = useMutation(
    UPDATE_RESERVA_MUTATION,
    {
      onCompleted: () => {
        toast.success('Reserva updated')
        navigate(routes.reservas())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateReserva({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Reserva {reserva?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ReservaForm
          reserva={reserva}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
