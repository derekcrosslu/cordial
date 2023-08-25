import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_RESERVA_MUTATION = gql`
  mutation DeleteReservaMutation($id: Int!) {
    deleteReserva(id: $id) {
      id
    }
  }
`

const Reserva = ({ reserva }) => {
  const [deleteReserva] = useMutation(DELETE_RESERVA_MUTATION, {
    onCompleted: () => {
      toast.success('Reserva deleted')
      navigate(routes.reservas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete reserva ' + id + '?')) {
      deleteReserva({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Reserva {reserva.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{reserva.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(reserva.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(reserva.updatedAt)}</td>
            </tr>
            <tr>
              <th>Nombre</th>
              <td>{reserva.nombre}</td>
            </tr>
            <tr>
              <th>Area</th>
              <td>{reserva.area}</td>
            </tr>
            <tr>
              <th>Invitados</th>
              <td>{reserva.invitados}</td>
            </tr>
            <tr>
              <th>Numeracion</th>
              <td>{reserva.numeracion}</td>
            </tr>
            <tr>
              <th>Mesa</th>
              <td>{reserva.mesa}</td>
            </tr>
            <tr>
              <th>Fecha</th>
              <td>{timeTag(reserva.fecha)}</td>
            </tr>
            <tr>
              <th>Telefono</th>
              <td>{reserva.telefono}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{reserva.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editReserva({ id: reserva.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(reserva.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Reserva
