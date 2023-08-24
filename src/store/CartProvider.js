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

    const updatedItems = [...state.items, action.item];
    console.log(updatedItems);

    const updatedPrice = state.totalPrice + (action.item.price * action.item.amount);

    return {
      items: updatedItems,
      totalPrice: updatedPrice
    }; // 이 액션에 대한 업데이트된 새로운 상태 반환
  } else if (action.type === 'REMOVE') {
    const removedItems = state.items.filter(item => item.id !== action.id);

    return {
      items: removedItems
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