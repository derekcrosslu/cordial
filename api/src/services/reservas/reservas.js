import { db } from 'src/lib/db'

export const reservas = () => {
  return db.reserva.findMany()
}

export const reserva = ({ id }) => {
  return db.reserva.findUnique({
    where: { id },
  })
}

export const createReserva = ({ input }) => {
  return db.reserva.create({
    data: input,
  })
}

export const updateReserva = ({ id, input }) => {
  return db.reserva.update({
    data: input,
    where: { id },
  })
}

export const deleteReserva = ({ id }) => {
  return db.reserva.delete({
    where: { id },
  })
}
