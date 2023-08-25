import { FC, useState } from 'react'
import { useSnapshot } from 'valtio'
import ReactCalendar from 'react-calendar'
import { add, format, parseISO } from 'date-fns'
import './calendar.css'
import state from '../../store'

// interface indexProps { }

// interface DateType {
//   justDate: Date | null
//   dateTime: Date | null
// }

const index = ({}) => {
  const snap = useSnapshot(state)
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  })

  date.dateTime ? (state.date = format(date.justDate, 'yyyy-MM-dd')) : null

  date.dateTime ? (state.time = format(date.dateTime, 'hh:mm')) : null

  const getTimes = () => {
    if (!date.justDate) return
    const { justDate } = date
    const beginning = add(justDate, { hours: 12 })
    const end = add(justDate, { hours: 22 })
    const interval = 60 // minutes

    const times = []
    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i)
    }

    return times
  }
  const times = getTimes()
  const handleClick = (e) => {
    const { value } = e.target
    setDate((prev) => ({ ...prev, justDate: value }))
    state.calendar = false
    state.time = value
    state.date = date.justDate
  }
  const dateParse = (cb) => new Date().parseISO(cb)
  return (
    <div className="absolute  flex items-center justify-center">
      {date.justDate ? (
        <div className="flex  flex-wrap  justify-center gap-2">
          {times?.map((time, i) => (
            <div key={`time-${i}`} className=" rounded-sm bg-gray-100 p-2">
              <button
                // onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
                onClick={(time) => handleClick(time)}
                type="button"
                className="rounded-md bg-blue-500 p-2 text-white"
                value={format(time, 'hh:mm')}
              >
                {format(time, 'hh:mm')}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className="REACT-CALENDAR  p-2"
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </div>
  )
}

export default index
