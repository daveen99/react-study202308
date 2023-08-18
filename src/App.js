import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

const App = () => {

  const [userList, setUserList] = useState([]);

  const addUserHandelr = user => {
    console.log(user);
    setUserList(prev => [...prev, {...user, id: Math.random().toString()}]);
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandelr} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
