import React, { useContext } from 'react';

import Card from '../../UI/Card';
import styles from './Home.module.css';
import Button from '../../UI/Button/Button';
import AuthContext from '../../../store/auth-context';

const Home = () => {
  const authCtx = useContext(AuthContext); // 객체분해해서도 가능
  // const { } ...
  // console.log('authCtx: ', authCtx);

  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
