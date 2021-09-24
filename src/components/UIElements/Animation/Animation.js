import React, { createRef, useEffect } from "react"
import lottie from "lottie-web"
import animationData from "../../../assets/animations/75657-uiux-design-icon-lottie-animation.json"
const Animation = () => {
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
    <div ref={animationContainer}></div>
  )
}
export default Animation
