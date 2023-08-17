import './Button.css';
import React from 'react';

const Button = ({ type, onClick, children}) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
