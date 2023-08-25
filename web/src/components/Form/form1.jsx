
import Calendar from '../Calendar'
import { DateComponent } from './datecomp'
import { useSnapshot } from 'valtio'
import state from '../../store'
import Reservation from './reserve'


export default  function Form1() {
  const snap = useSnapshot(state)
  const handleReservation = () => {
    if (snap.date === '' || snap.time === '') {
      alert('Por favor selecciona una fecha')
    } else {
      state.reservacion = true
    }
  }

  return (
    <div className="flex  items-center justify-center gap-5">
      {snap.calendar ? <Calendar /> : null}
      <div className="home-border  ">
        <div className="home-filter flex h-20 w-96 bg-white">
          {/* <select
            name="selectedArea"
            className="flex "
            onChange={(e) => (state.area = e.target.value)}
          >
            <option value="patio">Patio</option>
            <option value="sala">Sala</option>
            <option value="bar">Bar</option>
          </select> */}

          <DateComponent />
          <input
            type="time"
            placeholder={'12:30'}
            className="w-12"
            defaultValue={snap.time}
          />
          <select name="selectedFruit" className="flex ">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            className="home-search"
            onClick={handleReservation}
          >
            {/* <img alt="image" src="/Icons/search.svg" className="home-icon10" /> */}
            <Reservation />
          </button>
        </div>
      </div>
    </div>
  )
}