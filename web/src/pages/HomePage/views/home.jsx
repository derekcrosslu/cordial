import React from 'react'
import Areas from '../../../components/areas'

import Buttons from './buttons'

import Header from '../../../components/header'
import Form from '../../../components/Form'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="home-nav">
        <Header></Header>
      </div>
      <div className="home-form">
        <Form />
        {/* <form className="home-form1 ">
          <button type="button" className="button hover">
            Button
          </button>
        </form> */}
      </div>
      <div className="home-body ">
        <Buttons />
        {/* <video
          autoPlay
          muted
          preload="auto"
          poster="/sala-1500w.webp"
          src="/sala.mp4"
          className="home-video"
        ></video> */}
        <Areas />
      </div>
    </div>
  )
}

export default Home
