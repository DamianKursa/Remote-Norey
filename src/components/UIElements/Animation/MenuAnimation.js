import React, { createRef, useEffect } from "react"
import lottie from "lottie-web"
import animationData from "../../../assets/animations/menu-animation.json"
const MenuAnimation = () => {
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
    <div className="animation" ref={animationContainer}></div>
  )
}
export default MenuAnimation
