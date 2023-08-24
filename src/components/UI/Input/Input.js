import React from "react";

import styles from './Input.module.scss';

const Input = ({ input, label, onAdd }) => {

  const amountChangeHandler = e => {
    onAdd(e.target.value)
  };
  
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} onChange={amountChangeHandler} />
    </div>
  );
};

export default Input;
