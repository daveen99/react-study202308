import React from 'react';
import styles from './Input.module.css';

const Input = ({id,label,type,value,IsValid, ...rest}) => {
  return (
    <div
      className={`${styles.control} ${
        IsValid === false ? styles.invalid : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        {...rest}
      />
    </div>
  );
};

export default Input;
