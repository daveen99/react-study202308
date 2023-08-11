import React from 'react';
// css 로딩
import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';
import { click } from '@testing-library/user-event/dist/click';

const ExpenseItem = ({ title, price: propsPrice, date }) => {
  // console.log(props);
  // const price = 99999;

  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice = propsPrice;

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  // 날짜 포맷팅 변환 함수 정의
  const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  // 숫자를 원화표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(propsPrice);

  const clickHandler = e => {
    console.log(`수정!`);
    console.log(e.target);
  };



  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
      <button id="btn" onMouseOver={clickHandler}>수정</button>
      <button id="btn" onMouseOver={e=>{console.log('삭제!');}}>삭제</button>
    </Card>
  );
};

export default ExpenseItem;
