import React, { useState } from 'react';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  // 지출 항목 객체 배열
  const expenses = [
    {
      id: 1,
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      id: 2,
      title: 'BBQ 치킨',
      price: 27000,
      date: new Date(2022, 5 - 1, 21),
    },
    {
      id: 3,
      title: '피자알볼로',
      price: 28000,
      date: new Date(2023, 8 - 1, 11),
    },
    {
      id: 4,
      title: '엽기떡볶이',
      price: 17000,
      date: new Date(2021, 3 - 1, 28),
    },
  ];


  // 지출 객체 배열을 상태변수로 관리
  // useState는 무조건 대괄호를 사용한다.
  const [expenseList, setExpenseList] = useState(expenses);


  //ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newExpense) => {
    console.log(newExpense);
    
    // 
    setExpenseList([...expenseList, newExpense]);
  }

  return (
    <>
      {/* 형제를 넣고싶을때는 React.Fragment로 감싸준다 == <> </> */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseList items={expenseList} />
      {/* <ExpenseList items={expenses} /> */}
    </>
  );
};

export default App;
