import React from 'react'

import PropTypes from 'prop-types'
import Navbar from './Navbar'

import './header.css'

const Header = (props) => {
  return (
    <header className="header-header">
      <div className="header-container">
        <div data-thq="thq-dropdown" className="header-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="header-dropdown-toggle"
          >
            <div
              data-thq="thq-dropdown-arrow"
              className="header-dropdown-arrow"
            >
              {/* <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg> */}
     
            <Navbar />
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
            <li data-thq="thq-dropdown" className="header-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle1"
              >
                <div className="header-container1">
                  <span className="header-text">{props.Text}</span>
                </div>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle2"
              >
                <span className="header-text1">{props.text}</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="header-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle3 hover:w-8"
              >
                <span className="header-text2">{props.text1}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-container2">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="header-image"
        />
      </div>
      <div className="header-container3">
        <div className="header-container4 hover:bg-rose-600">
          <svg viewBox="0 0 877.7142857142857 1024" className="header-icon4">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  image_src: '/logo-200h.png',
  image_alt: 'image',
  text: 'CARTA',
  text1: 'CONTACTO',
  Text: 'RESERVAS',
}

Header.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  Text: PropTypes.string,
}

export default Header
