import './App.css';
import React from 'react';

function App() {
  //                    JSX문법
  // const $h2 = React.createElement('h2', null, '반가워요');
  const $h2 = <h2>반가워요~</h2>;
  return (
    // 형제를 넣고싶을때는 React.Fragment로 감싸준다
    <>
      <div className="App">
        <h1>메롱메롱</h1>
        {$h2}
      </div>

      <div className="noname">
        <input type="text" />
        <p>
          오늘은 태풍이 와서 비가 많이 내렸따.<br/>
          그래서 공부가 하기 싫다.
        </p>
      </div>
    </>
  );
}

export default App;
