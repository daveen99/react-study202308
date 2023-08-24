import React, { useState } from 'react';
import Input from '../../../UI/Input/Input';
import styles from './MealItemForm.module.scss';

const MealItemForm = ({id, onAddToCart }) => {

  const [amount, setAmount] = useState(1);

  const formSubmitHandler = e => {
    e.preventDefault();
    onAddToCart(amount);
  };

  const amountHandler = amt => {
    // console.log(`선택된 수량: ${amt}`);
    setAmount(amt);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <Input
        onAdd={amountHandler}
        label='수량'
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
