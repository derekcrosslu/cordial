import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ReservaForm from 'src/components/Reserva/ReservaForm'

const CREATE_RESERVA_MUTATION = gql`
  mutation CreateReservaMutation($input: CreateReservaInput!) {
    createReserva(input: $input) {
      id
    }
  }
`

const NewReserva = () => {
  const [createReserva, { loading, error }] = useMutation(
    CREATE_RESERVA_MUTATION,
    {
      onCompleted: () => {
        toast.success('Reserva created')
        navigate(routes.reservas())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createReserva({ variables: { input } })

  
    const inputVars = {
      area: 'a',
      email: 'ax5',
      fecha: input.fecha,
      invitados: 1,
      mesa: 1,
      nombre: 'a',
      numeracion: 1,
      telefono: '19'
    }

    createReserva({ variables: { input: inputVars } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Reserva</h2>
      </header>
      <div className="rw-segment-main">
        <ReservaForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewReserva
