import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalPrice: 0
};
// 리듀서 함수 정의 : 여러가지 복잡한 상태관리를 중앙집중화
// state: 업데이트 이전상태
// action: 어떤 업데이트를 하는지에 대한 정보와 필요값들이 들어있음
const cartReducer = (state, action) => {

  if (action.type === 'ADD') {
    // 신규 아이템
    const newCartItem = action.item;

    // 기존 장바구니에 등록된 메뉴인지 아닌지에 따라 다른 처리를 해야함
    const index = state.items.findIndex(item => item.id === newCartItem.id);

    // 기존 아이템
    const existingItems = [...state.items];  // 기존 배열을 복사
    const prevCartItem = existingItems[index];  // 기존 배열에서 탐색된 장바구니 아이템을 가져옴
    
    const updatedPrice = state.totalPrice + (newCartItem.price * newCartItem.amount);

    let updatedItems;

    if (index === -1) { // 신규아이템
       updatedItems = [...state.items, newCartItem];
     } else { // 기존아이템: 수량만 1증가
      prevCartItem.amount += newCartItem.amount;  // 복사된 아이템의 수량을 늘려줌
      updatedItems = [...existingItems];   // 새롭게 복사 배열을 갱신
     }

    return {
      items: updatedItems,
      totalPrice: updatedPrice
    }; // 이 액션에 대한 업데이트된 새로운 상태 반환
  } else if (action.type === 'REMOVE') {

    // 기존 배열을 복사
    const existingItems = [...state.items];
    // 지금 제거대상의 인덱스 찾기
    const index = existingItems.findIndex(item => item.id === action.id);
    // 제거대상 아이템을 가져옴
    const delTargetItem = existingItems[index];

    // 총액 계산
    const updatedPrice = state.totalPrice - delTargetItem.price;

    // 업데이트 전 수량이 1이면 filter로 제거함
    // 그런데 1보다 크다면 제거하면 안되고
    // 기존배열에서 수량을 1내린채로 업데이트 해야함
    let removedItems;
    if (delTargetItem.amount === 1) {
      removedItems = existingItems.filter(item => item.id !== action.id);
    } else {
      delTargetItem.amount--;
      removedItems = [...existingItems];
    }

    return {
      items: removedItems,
      totalPrice: updatedPrice
    };
  }

  return defaultState;
};


const CartProvider = ({children}) => {

  // 리듀서 사용
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  // Provider의 value는 실제로 관리할 데이터 객체
  const cartContext = {
    items: cartState.items, // 장바구니 항목 배열
    totalPrice: cartState.totalPrice,
    addItem: item => {
      // 액션함수는 반드시 무슨 액션을하는지와 액션에 필요한 값을 전달
      dispatchCartAction({
        type: 'ADD',
        item: item
      });
    },
    removeItem: id => {
      dispatchCartAction({
        type: 'REMOVE',
        id: id
      });
    }
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;