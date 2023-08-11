import React from 'react';
import './ExpenseDate.css';

const ExpencsDate = ({date}) => {

  const year = date.getFullYear();
  const month = date.toLocaleString('ko-KR', {month:'long'});
  const day = date.getDate();


  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpencsDate;
