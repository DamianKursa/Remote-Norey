import React from "react"
import cn from "classnames"

const Container = ({
  padding,
  margin,
  direction,
  width,
  height,
  fluid,
  verticalAlign,
  align,
  color,
  children,
  gap,
  ...props
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        padding: padding,
        margin: margin,
      }}
      className={cn({
        [`container container-color--${color}`]: color,
        [`container  container-align--${align}`]: align,
        [`container  container-vertical-align--${verticalAlign}`]:
          verticalAlign,
        [`container  container-direction--${direction}`]: direction,
        [`container  container-gap--${gap}`]: gap,
        [`container  container-fluid--${fluid}`]: fluid,
        [`container  container-paddingH--${padding}`]: padding,
      })}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
