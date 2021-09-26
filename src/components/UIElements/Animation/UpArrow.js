import React, { createRef, useEffect } from "react"
import lottie from "lottie-web"
import animationData from "../../../assets/animations/up-arrow.json"
const UpArrow = () => {
  let animationContainer = createRef()
  let anim = null

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    })
    return () => anim.destroy() // optional clean up for unmounting
  }, [])

  return (
    <div className="arrow-up" ref={animationContainer}></div>
  )
}
export default UpArrow
