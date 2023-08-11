import React from 'react';
import Expenseitem from './components/Expenseitem';
import ExpenseList from './components/ExpenseList';

const App = () => {
  // 지출 항목 객체 배열
  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      title: 'BBQ 치킨',
      price: 27000,
      date: new Date(2023, 5 - 1, 21),
    },
    {
      title: '피자알볼로',
      price: 28000,
      date: new Date(2023, 8 - 1, 11),
    },
  ];

  return (
    // 형제를 넣고싶을때는 React.Fragment로 감싸준다 == <> </>
    <ExpenseList items={expenses} />
  );
};

export default App;
