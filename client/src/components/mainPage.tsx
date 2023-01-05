import React, { FC, useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from '.././index'
import { IUser } from '../models/user';
import UserService from '../services/userService'


const MainPage: FC = () => {
    async function getUsers(){
        try {
          const response = await UserService.fetchUsers()
          setUsers(response.data)
        } catch (e) {
          console.log(e)
        }
      }
const { store } = useContext(Context);
const [users, setUsers] = useState<IUser[]>([])
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
};

export default observer(MainPage);
