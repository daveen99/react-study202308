import React from 'react';
import Expenseitem from './components/Expenseitem';

const App = () => {
  return (
    // 형제를 넣고싶을때는 React.Fragment로 감싸준다
    <>
      <Expenseitem />
    </>
  );
};

export default App;
