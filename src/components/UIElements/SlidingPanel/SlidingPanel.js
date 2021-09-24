import React, {useState} from 'react'

const SlidingPanel = (props) => {
  return (
    <div className={"sliding-panel " + " " + (props.open === true ? "sliding-panel--open" : "sliding-panel--close")}>
      {props.children}
    </div>
  )
}

export default SlidingPanel
