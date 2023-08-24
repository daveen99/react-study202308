import React from "react";

// 장바구니에 담기고 제외되는 항목들을 상태관리하는 컨텍스트
// 컨텍스트에 들어가는 초기 객체는 뭘 담을것인지에 대한 정의
const CartContext = React.createContext({
  items: [], // 장바구니에 담긴 항목 배열,
  totalPrice: 0, // 주문 총액
  addItem: item => {},
  removeItem: id => {}
});

export default CartContext;