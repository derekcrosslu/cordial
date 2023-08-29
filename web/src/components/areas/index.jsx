import { Suspense, lazy, useState, useTransition } from 'react'

import {
  useGLTF,
  Center,
  ContactShadows,
  Environment,
  CameraControls,
  OrbitControls,
  useProgress,
  Html,
} from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useSnapshot } from 'valtio'

import state from '../../store'

// import Bar from './bar'
import Bar from './bar'
import Sala from './sala'
import wrapPromise from './suspend'
// import Terraza from './terraza'
const Terraza = lazy(() => import('./terraza'))
// import Sotano from './sotano'

const SwitchComponent = () => {
  const snap = useSnapshot(state)
  const { progress } = useProgress()

  switch (snap.area) {
    case 'bar':
      return <Bar />
    // return <MyComponent />
    case 'sala':
      return <Sala />
    default:
      return <Terraza />
  }
}

const getPeople = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(['jose', 'maria', 'pedro']), 5000000000000)
  })
}
const peoplePromise = wrapPromise(getPeople())

const MyComponent = () => {
  const people = peoplePromise.read()

  return (
    <>
      {people?.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </>
  )
}

export default function App() {
  const snap = useSnapshot(state)

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-900">
      <Suspense fallback={<Loader />}>
        <Canvas>
          <SwitchComponent />
        </Canvas>
        {/* <MyComponent /> */}
      </Suspense>
    </div>
  )
}

const Loader = () => {
  const snap = useSnapshot(state)
  return (
    <Suspense fallback={<Loader2 />}>
      <div className="flex  w-full items-center justify-center bg-gray-900 mt-32">
        <video
          autoPlay
          muted
          preload="auto"
          // poster={`/${snap.area}.webp`}
          src={`/${snap.area}.mp4`}
          className="flex w-full h-full  webkit-filter home-video "
        ></video>
        {/* <MyComponent /> */}
      </div>
    </Suspense>
  )
}

const Loader2 = () => {
  return <div className="flex h-full w-full items-center justify-center bg-gray-900 "> loaded</div>
}
