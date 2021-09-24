import React from 'react'
import cn from "classnames";

const Content = ({ color,align,children, ...props }) => {

  return (
    <div
      className={cn({
        [`content-background--color-${color}`]: color,
        [`content--align-${align}`]: align,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

export default Content 
