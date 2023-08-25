import { useSnapshot } from 'valtio'
import state from '../../store'

export const DateComponent = () => {
  const snap = useSnapshot(state)

  const dateNow = new Date()
  const [date, setDate] = React.useState({
    data: {
      day: dateNow.getDate(),
      month: dateNow.getMonth(),
      year: dateNow.getFullYear(),
    },
  })

  React.useEffect(() => {
    if (snap.date) {
      setDate({
        data: {
          day: snap.date.getDate(),
          month: snap.date.getMonth() + 1,
          year: snap.date.getFullYear(),
        },
      })
    }
  }, [snap.calendar])

  return (
    <button
      onClick={() => {
        state.calendar = !snap.calendar
      }}
    >
      <div className=" flex  items-center gap-0 border-black">
        <input
          type="text"
          placeholder={date.data.day}
          className="w-6 text-center"
        />
        <div className="w-2">/</div>
        <input
          type="text"
          placeholder={date.data.month}
          className="w-6 text-center"
        />
        <div className="w-2">/</div>
        <input
          type="text"
          placeholder={date.data.year}
          className="w-12 text-center"
        />
      </div>
    </button>
  )
}
