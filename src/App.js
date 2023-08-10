import React from 'react';
import './App.css';
import Appitem from './Appitem';
import Noname from './Noname';

const App() => {
  //                    JSX문법
  // const $h2 = React.createElement('h2', null, '반가워요');
  // const $h2 = <h2>반가워요~</h2>;
  return (
    // 형제를 넣고싶을때는 React.Fragment로 감싸준다
    <>
      <AppItem />
      <Hello />
      <Noname />
  );
}

export default App;
