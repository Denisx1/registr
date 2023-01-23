import React, { useState } from "react";
import { IUser } from "../../../models/user";
import UserService from "../../../services/userService";
import Button from "../firstNavbar/navbar/button";
import "./index.css";

const FirstBlock = ({ button }: { button: string[] }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log();
    }
  }

  return (
    <div className="white">
      {button.map((str) => (
        <Button title={str} onHandleClick={() => getUsers()} />
      ))}
      {users.map(user=><div key={user.email}>{user.email}</div>)}
    </div>
    
  );
};

export default FirstBlock;
