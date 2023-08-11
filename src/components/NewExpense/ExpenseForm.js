import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = e => {
        setTitle(e.target.value);
        // console.log(title);
    };
    const priceChangeHandler = e => {
        setPrice(e.target.value);
    };
    const dateChangeHandler = e => {
        setDate(e.target.value);
    };

    const formSubmitHandler = e => {
        e.preventDefault();  //submit 차단
        console.log('submit 버튼을 누름!');

        const newExpense = {
            title: title,
            price: price,
            date: date
        };
        console.log(newExpense);


        // 입력창 리셋
        setTitle('');
        setPrice('');
        setDate('');
    }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={priceChangeHandler}
            value={price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
