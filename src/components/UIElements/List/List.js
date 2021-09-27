import React from 'react'

const List = (props) => {
  return (
    <ul className={`${props.type === 'service'? 'service-list': 'list'}`}>
      {props.children}
    </ul>
  )
}

export default List
