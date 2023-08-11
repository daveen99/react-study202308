import React from 'react';
import Expenseitem from './components/Expenseitem';

const App = () => {
  // 지출 항목 객체 배열
  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 -1, 23),
    },
    {
      title: 'BBQ 치킨',
      price: 27000,
      date: new Date(2023, 5 -1, 21),
    },
    {
      title: '피자알볼로',
      price: 28000,
      date: new Date(2023, 8 -1, 11),
    }
  ];

  return (
    // 형제를 넣고싶을때는 React.Fragment로 감싸준다 == <> </>
    <>
      {/* 숫자, 논리등의 데이터를 보낼때는 중괄호 */}
      <Expenseitem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
        // abc={[1,2,3]}
      />
      <Expenseitem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <Expenseitem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </>
  );
};

export default App;
