import React, { useState } from 'react';
// css 로딩
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ title, price: propsPrice, date }) => {

  // let itemTitle = title;

  // 값이 변경되어 화면에 반영되어야 하는 값들은 
  // useState훅을 통해 상태변수로 관리한다.

  // useState는 배열을 리턴하는데 
  // 첫번째 요소는 관리할 상태값
  // 두번째 요소는 상태값을 변경하는 setter함수
  const [itemTitle, setItemTitle] = useState(title);
  // console.log(stateItem);

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
    // itemTitle = '안녕';
    // console.log(itemTitle);

    // state변수는 만드시 setter를 통해서만 변경해야 함
    // setItemTitle((snapshot) => {
    //   console.log(`snapshot: ${snapshot}`);
    //   // 메롱이 새로운 값이되며 기존 스냅샷과 다를경우
    //   // 화면을 리렌더링하고 같을경우 리렌더링하지 않는다.
    //   return '메롱'; 
    // });

    setItemTitle('메롱');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
      <button id='btn' onClick={clickHandler}>수정</button>
      <button id='btn' onClick={e => { console.log('삭제!') }}>삭제</button>
    </Card>
  );
};

export default ExpenseItem;
