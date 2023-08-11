import React from 'react';
import Expenseitem from './Expenseitem';
import './ExpenseList.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';


const ExpenseList = ({ items }) => {


  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
  };


  return (
    <Card className="expenses">
      {/* 숫자, 논리등의 데이터를 보낼때는 중괄호 */}
      {/* on이 붙으면 함수를 보낸다는 관례 */}
      <ExpenseFilter onChangeFilter={filterChangeHandler}/>


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
    </Card>
  );
};

export default ExpenseList;
