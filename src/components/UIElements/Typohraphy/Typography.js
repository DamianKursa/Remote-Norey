import React from 'react'
import cn from "classnames";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

const Typography = ({ variant, color,align,children, ...props }) => {

  //const Wrapper = variant ? variantsMapping[variant] : "p";

  return (
    <div
      className={cn({
        [`typography--variant-${variant}`]: variant,
        [`typography--color-${color}`]: color,
        [`typography--align-${align}`]: align,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

export default Typography 
