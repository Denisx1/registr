import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useContext, useState } from "react";
import LoginForm from "./components/auth/authForm";
import MainPage from "./components/main/mainPage";
import { Context } from "./index";
import { IUser } from './models/user'
import UserService from "./services/userService";
import "./App.css";

const App: FC = () => {
  const { store } = useContext(Context);
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    // return <progress  max="100" value="70" className='load'> 70% </progress>
    return <div className="load">Loading...</div>;
  }

  if (!store.isAuth) {
    return (
      <div className="body">
        <LoginForm />
      </div>
    );
  }

  return (
      <MainPage />
  );
};

export default observer(App);
