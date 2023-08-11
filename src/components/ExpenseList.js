import React from 'react';
import Expenseitem from './Expenseitem';
import './ExpenseList.css';


const ExpenseList = ({ items }) => {
  return (
    <div className="expenses">
      {/* 숫자, 논리등의 데이터를 보낼때는 중괄호 */}
      <Expenseitem
        title={items[0].title}
        price={items[0].price}
        date={items[0].date}
        // abc={[1,2,3]}
      />
      <Expenseitem
        title={items[1].title}
        price={items[1].price}
        date={items[1].date}
      />
      <Expenseitem
        title={items[2].title}
        price={items[2].price}
        date={items[2].date}
      />
    </div>
  );
};

export default ExpenseList;
