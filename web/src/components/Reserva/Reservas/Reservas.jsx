import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Reserva/ReservasCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_RESERVA_MUTATION = gql`
  mutation DeleteReservaMutation($id: Int!) {
    deleteReserva(id: $id) {
      id
    }
  }
`

const ReservasList = ({ reservas }) => {
  const [deleteReserva] = useMutation(DELETE_RESERVA_MUTATION, {
    onCompleted: () => {
      toast.success('Reserva deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete reserva ' + id + '?')) {
      deleteReserva({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Nombre</th>
            <th>Area</th>
            <th>Invitados</th>
            <th>Numeracion</th>
            <th>Mesa</th>
            <th>Fecha</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>{truncate(reserva.id)}</td>
              <td>{timeTag(reserva.createdAt)}</td>
              <td>{timeTag(reserva.updatedAt)}</td>
              <td>{truncate(reserva.nombre)}</td>
              <td>{truncate(reserva.area)}</td>
              <td>{truncate(reserva.invitados)}</td>
              <td>{truncate(reserva.numeracion)}</td>
              <td>{truncate(reserva.mesa)}</td>
              <td>{timeTag(reserva.fecha)}</td>
              <td>{truncate(reserva.telefono)}</td>
              <td>{truncate(reserva.email)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.reserva({ id: reserva.id })}
                    title={'Show reserva ' + reserva.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editReserva({ id: reserva.id })}
                    title={'Edit reserva ' + reserva.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete reserva ' + reserva.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(reserva.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReservasList
