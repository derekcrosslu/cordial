
import Calendar from '../Calendar'
import { DateComponent } from './datecomp'
import { useSnapshot } from 'valtio'
import state from '../../store'
import Reservation from './reserve'


export default  function Form3() {
  const snap = useSnapshot(state)

  return (
    <div className="flex  items-center justify-center gap-5 text-white text-6xl ">
   Gracias por tu reservación
    </div>
  )
}