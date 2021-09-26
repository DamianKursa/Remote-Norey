import React from "react"
import Container from "../Container/Container"
import Button from "../Button/Button"
import UpArrow from "../Animation/UpArrow"
const Modal = (props) => {
  return (
    <div
      className={
        "modal " +
        (props.isModalOpen === true ? "modal--open wrapper" : "modal--close")
      }
    >
      <div className="modal__close--wrapper">
        <Button onClick={props.close} type='primary-top'>
          <UpArrow />
          Close me
        </Button>
      </div>

      <div className='wrapper'>{props.children}</div>
    </div>
  )
}

export default Modal
