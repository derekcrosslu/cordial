import {
  reservas,
  reserva,
  createReserva,
  updateReserva,
  deleteReserva,
} from './reservas'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('reservas', () => {
  scenario('returns all reservas', async (scenario) => {
    const result = await reservas()

    expect(result.length).toEqual(Object.keys(scenario.reserva).length)
  })

  scenario('returns a single reserva', async (scenario) => {
    const result = await reserva({ id: scenario.reserva.one.id })

    expect(result).toEqual(scenario.reserva.one)
  })

  scenario('creates a reserva', async () => {
    const result = await createReserva({
      input: {
        updatedAt: '2023-08-17T15:57:55.695Z',
        nombre: 'String',
        area: 'String',
        invitados: 895689,
        numeracion: 4850386,
        mesa: 5369720,
        fecha: '2023-08-17T15:57:55.695Z',
        telefono: 'String',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-17T15:57:55.695Z'))
    expect(result.nombre).toEqual('String')
    expect(result.area).toEqual('String')
    expect(result.invitados).toEqual(895689)
    expect(result.numeracion).toEqual(4850386)
    expect(result.mesa).toEqual(5369720)
    expect(result.fecha).toEqual(new Date('2023-08-17T15:57:55.695Z'))
    expect(result.telefono).toEqual('String')
  })

  scenario('updates a reserva', async (scenario) => {
    const original = await reserva({ id: scenario.reserva.one.id })
    const result = await updateReserva({
      id: original.id,
      input: { updatedAt: '2023-08-18T15:57:55.695Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-18T15:57:55.695Z'))
  })

  scenario('deletes a reserva', async (scenario) => {
    const original = await deleteReserva({
      id: scenario.reserva.one.id,
    })
    const result = await reserva({ id: original.id })

    expect(result).toEqual(null)
  })
})
