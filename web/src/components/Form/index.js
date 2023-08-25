import React, { useEffect } from 'react'

import { useSnapshot } from 'valtio'
import state from '../../store'


import Form1 from './form1'
import Form2 from './form2'
import Form3 from './form3'

const Form = () => {
  const snap = useSnapshot(state)
  return <>{!snap.reservacion ? <Form1 /> :snap.reservacionHecha ?<Form3 />: <Form2 />}</>
}

export default Form
