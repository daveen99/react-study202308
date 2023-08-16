import React, { useState } from 'react';
import Expenseitem from './Expenseitem';
import './ExpenseList.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const ExpenseList = ({ items }) => {

  // 선택된 연도 상태값 관리
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

  // 자식 컴포넌트 ExpenseFilter에 있는 선택연도를 끌어올리는 콜백함수
  const filterChangeHandler = (selectedYear) => {
    // console.log('ExpenseList: ' + selectedYear);
    setFilteredYear(selectedYear);
  };

  // ExpenseItem을 동적 렌더링하기
  // const iterateExpenseItem = () => {
  //   return items.map((item) => (
  //     <ExpenseItem
  //       title={item.title}
  //       price={item.price}
  //       date={item.date}
  //     />
  //   ));
  // };

  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangeHandler} />

      {items
        .filter(item => item.date.getFullYear().toString() === filteredYear)
        .map(({ id, title, price, date }) => (
        <Expenseitem
          key={id}
          title={title}
          price={price}
          date={date}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
