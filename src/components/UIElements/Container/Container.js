import React from "react"
import cn from "classnames"

const Container = ({
  padding,
  container,
  margin,
  justify,
  align,
  direction,
  width,
  height,
  fluid,
  color,
  children,
  gap,
  className,
  bgIcon,
  ...props
}) => {
  return (
    <div
      style={{
        padding: padding,
        margin: margin,
      }}
      className={cn({
        [`${className}`]: className,
        [`container`]: container,
        [`container-color--${color}`]: color,
        [`container-align--${align}`]: align,
        [`container-justify--${justify}`]:justify,
        [`container-direction--${direction}`]: direction,
        [`container-gap--${gap}`]: gap,
        [`container-fluid--${fluid}`]: fluid,
        [`container-paddingH--${padding}`]: padding,
        [`container-width--${width}`]: width,
        [`container-height--${height}`]: height,
      })}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
