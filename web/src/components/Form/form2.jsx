import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { useSnapshot } from 'valtio'
import state from '../../store'
import Enter from './enter'
import { useEffect } from 'react';
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_RESERVA_MUTATION = gql`
  mutation CreateReservaMutation($input: CreateReservaInput!) {
    createReserva(input: $input) {
      id
    }
  }
`

export default function Form2() {
    const [createReserva, { loading, error }] = useMutation(
    CREATE_RESERVA_MUTATION,
    {
      onCompleted: () => {
        toast.success('Reserva created')
        // navigate(routes.reservas())
      },
      onError: (error) => {
        console.log("error: ", error);
        toast.error(error.message)
      },
    }
  )
  const snap = useSnapshot(state)

  useEffect(() => {
    console.log("snap.click: ", snap.click);
  }, [snap.click])


  const handleClick = () => {
    
    let date = new Date(snap.date)
    
    const inputVars = {
      area: snap.area,
      email: snap.correo,
      fecha: date,
      invitados: snap.personas,
      mesa: parseInt(snap.mesa),
      nombre: snap.nombre,
      numeracion: Object.keys(snap.click).filter((x) => snap.click[x] === true),
      telefono: snap.telefono
    }
    
    if (Object.values(snap.click).some((x) => x === true)) {
      if (snap.nombre === '' || snap.telefono === '' || snap.correo === '' ) {
        alert("Por favor llena todos los campos");
      } else {

        console.log("snap.click is not empty: ");
        // habilitar antes de deploy
        createReserva({ variables: { input: inputVars } })
        state.reservacionHecha = true;
        console.log("inputVars: ", inputVars);
      }
    } else {
      console.log("snap.click is EMPTY ");
      alert("Selecciona un lugar haciendo click en la mesa o asiento deseado")
    }

  }

  return (
    <div className="flex  items-center justify-center gap-2 ">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <div className="home-border ">
        <div className="home-filter ">
          <input
            type="text"
            placeholder="nombre"
            className="w-full"
            onChange={(e) => (state.nombre = e.target.value)}
            value={snap.nombre}
          />
          <input
            type="text"
            placeholder="telefono"
            className="w-full"
            onChange={(e) => (state.telefono = e.target.value)}
            value={snap.telefono}
          />
          <input
            type="text"
            placeholder="correo"
            className="w-full"
            onChange={(e) => (state.correo = e.target.value)}
            value={snap.correo}
          />

          <button className="home-search w-20" onClick={handleClick}>
            {/* <img alt="image" src="/Icons/search.svg" className="home-icon10" /> */}
            <Enter />
          </button>
        </div>
      </div>
    </div>
  )
}