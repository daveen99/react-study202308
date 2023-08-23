import React, { useState, useEffect, useContext } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Home from './components/SideEffect/Home/Home';
import Login from './components/SideEffect/Login/Login';
import AuthContext from './store/auth-context';


const App = () => {

  const { isLoggedIn } = useContext(AuthContext);



  return (
    <>
      <MainHeader />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login />}
      </main>
    </>
  );
};

export default App;
