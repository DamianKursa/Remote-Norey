import React from 'react';
import { Link } from 'gatsby';


const Button = props => {
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`button button--${props.type || 'default'} `}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.type || 'default'} `}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
