import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpenseChart';

const ExpenseList = ({ items }) => {
  // 선택된 연도 상태값 관리
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

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

  const filteredItems = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  // 조건부 렌더링을 위한 변수
  let expenseContent = <p>아직 등록된 지출이 없습니다</p>;

  if (filteredItems.length > 0) {
    expenseContent = filteredItems
    .map(({ id, title, price, date }) => (
      <ExpenseItem
        key={id}
        title={title}
        price={price}
        date={date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredItems} />

      {expenseContent}
    </Card>
  );
};

export default ExpenseList;
