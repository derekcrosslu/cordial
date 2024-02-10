export const schema = gql`
  type Reserva {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    nombre: String!
    area: String!
    invitados: Int!
    numeracion: [String]!
    mesa: Int!
    fecha: DateTime!
    telefono: String!
    email: String
  }

  type Query {
    reservas: [Reserva!]! @requireAuth
    reserva(id: Int!): Reserva @requireAuth
  }

  input CreateReservaInput {
    nombre: String!
    area: String!
    invitados: Int!
    # numeracion: [String]!
    mesa: Int!
    fecha: DateTime!
    telefono: String!
    email: String
  }

  input UpdateReservaInput {
    nombre: String
    area: String
    invitados: Int
    numeracion: [String]!
    mesa: Int
    fecha: DateTime
    telefono: String
    email: String
  }

  type Mutation {
    createReserva(input: CreateReservaInput!): Reserva! @requireAuth
    updateReserva(id: Int!, input: UpdateReservaInput!): Reserva! @requireAuth
    deleteReserva(id: Int!): Reserva! @requireAuth
  }
`
