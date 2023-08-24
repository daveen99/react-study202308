import React, {useState, useEffect} from 'react';
// 로그인 상태 변수를 관리할 컨텍스트
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = ({children}) => {
  // 로그인 상태를 관리하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 화면이 리렌더링될 때 localStorage를 확인해서
  // 현재 로그인 플래그가 존재하는지 검사

  // 기존에 로그인한 사람인지 확인하는 코드는 리렌더링할때마다
  // 돌아가게 만들면 안됨
  useEffect(() => {
    console.log('useEffect 실행! - 최초 단한번만 실행됨!');
    console.log('로그인 검사 수행!');
    const storedLoginFlag = localStorage.getItem('login-flag');
    if (storedLoginFlag === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  // 서버로 로그인을 요청하는 함수
  const loginHandler = (email, password) => {
    // 로그인의 증거로 브라우저에 로그인 값을 1로 표현해서 저장
    localStorage.setItem('login-flag', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('login-flag');
    setIsLoggedIn(false);
  };


  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler
    }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthContext;
