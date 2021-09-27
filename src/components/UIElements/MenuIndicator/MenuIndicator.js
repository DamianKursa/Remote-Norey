import React, { useState } from "react"

const MenuIndicator = (props) => {
  const [hover, setHover] = useState(false)

  const changeColor = () => {
    setHover(!hover)
  }

  const styles = {
    normal: {
      path: {
        fill: "#fff",
      },
    },
    hover: {
      path: {
        fill: "#FD7139",
        
      },
    },
  }
  return (
    <div >
      <svg
        onMouseEnter={changeColor}
        onMouseLeave={changeColor}
        xmlns='http://www.w3.org/2000/svg'
        width='32.791'
        height='21.133'
        viewBox='0 0 32.791 21.133'
      >
        <g id='Menu' transform='translate(-2084 74)'>
          <path
            id='Path_3'
            data-name='Path 3'
            d='M0,0H29.791'
            transform='translate(2085.5 -63.433)'
            fill='none'
            stroke={hover ? styles.hover.path.fill : styles.normal.path.fill}
            strokeLinecap='round'
            strokeWidth='3'
          />
          <path
            id='Path_2'
            data-name='Path 2'
            d='M0,0H15.543'
            transform='translate(2085.5 -72.5)'
            fill='none'
            stroke={hover ? styles.hover.path.fill : styles.normal.path.fill}
            strokeLinecap='round'
            strokeWidth='3'
          />
          <line
            id='Line_3'
            data-name='Line 3'
            x2='16.838'
            transform='translate(2098.452 -54.367)'
            fill='none'
            stroke={hover ? styles.hover.path.fill : styles.normal.path.fill}
            strokeLinecap='round'
            strokeWidth='3'
          />
        </g>
      </svg>
    </div>
  )
}

export default MenuIndicator
