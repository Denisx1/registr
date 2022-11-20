
import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useContext, useState } from 'react';
import LoginForm from './components/authform';
import { Context } from './index';
import { IUser } from './models/user';
import UserService from './services/userService';


const App: FC = () => {
  const { store } = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {

    if (localStorage.getItem('token')) {
      store.checkAuth()
    }

  }, [])

  async function getUsers(){
    try {
      const response = await UserService.fetchUsers()
      setUsers(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  if (store.isLoading){
    return <div>Loading...</div>
  }

  if (!store.isAuth) {
    return (
      <div>
        <LoginForm />
        {/*<button onClick={getUsers}>Get Users</button> */}
      </div>
      
      
    )
  }

  return (
    <div>
      <h1>{store.isAuth ? `User is authorise ${store.user.email}` : 'REGISRTATION'}</h1>
      <h1>{store.user.isActivated? 'Account is activated': 'Account is not activated Check your Email'}</h1>
      <button onClick={() => store.logout()}>Logout</button>
      <div>
        <button onClick={getUsers}>Get Users</button>
      </div>
      {users.map(user => 
          <div key={user.email}>{user.email}</div>
          )}
    </div>
  );
}

export default observer(App);
