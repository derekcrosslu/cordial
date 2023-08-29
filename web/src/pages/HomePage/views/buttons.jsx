import React from 'react'
import { snapshot } from 'valtio'
import state from '../../../store'

export default function buttons() {
  const snap = snapshot(state)
  const handleClick = (str) => {
    state.area = str
  }
  return (
    <div className="home-buttons   gap-10">
      <button
        type="button"
        className="home-bar button flex items-center justify-center"
        onClick={() => handleClick('bar')}
      >
        <svg viewBox="0 0 1024 1024" className="home-icon ">
          <path d="M889.162 179.77c7.568-9.632 8.972-22.742 3.62-33.758-5.356-11.018-16.532-18.012-28.782-18.012h-704c-12.25 0-23.426 6.994-28.78 18.012-5.356 11.018-3.95 24.126 3.618 33.758l313.162 398.57v381.66h-96c-17.672 0-32 14.326-32 32s14.328 32 32 32h320c17.674 0 32-14.326 32-32s-14.326-32-32-32h-96v-381.66l313.162-398.57zM798.162 192l-100.572 128h-371.18l-100.57-128h572.322z"></path>
        </svg>
      </button>
      <button
        type="button"
        className="home-sala button align flex items-center justify-center"
        onClick={() => handleClick('sala')}
      >
        <svg viewBox="0 0 1024 1024" size="48px" className="home-icon2">
          <path d="M224 0c-106.040 0-192 100.288-192 224 0 105.924 63.022 194.666 147.706 217.998l-31.788 518.124c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.788-518.124c84.684-23.332 147.706-112.074 147.706-217.998 0-123.712-85.96-224-192-224zM869.334 0l-53.334 320h-40l-26.666-320h-26.668l-26.666 320h-40l-53.334-320h-26.666v416c0 17.672 14.326 32 32 32h83.338l-31.42 512.122c-2.154 35.132 24.882 63.878 60.082 63.878h32c35.2 0 62.236-28.746 60.082-63.878l-31.42-512.122h83.338c17.674 0 32-14.328 32-32v-416h-26.666z"></path>
        </svg>
      </button>
      <button
        type="button"
        className="home-terraza button align flex flex-col items-center justify-center"
        onClick={() => handleClick('terraza')}
      >
        <svg viewBox="0 0 877.7142857142857 1024" className="home-icon4">
          <path d="M877.714 128v640c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-306.857l-438.857 135.429v405.143c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-552.571c0-24 16-45.143 38.857-52.571l475.429-146.286c5.143-1.714 10.286-2.286 16-2.286 30.286 0 54.857 24.571 54.857 54.857z"></path>
        </svg>
      </button>
    </div>
  )
}
