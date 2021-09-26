import React from "react"
import cn from "classnames"

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  p: "p",
  a: "a",
}

const Typography = ({ width, variant, color, align, children, ...props }) => {
  //const Wrapper = variant ? variantsMapping[variant] : "p";

  return (
    <div
      style={{
        width: width,
      }}
      className={cn({
        [`typography--variant-${variant}`]: variant,
        [`typography--color-${color}`]: color,
        [`typography--align-${align}`]: align,
      })}
      {...props}
    >
      {children}
    </div>
  )
}

export default Typography
