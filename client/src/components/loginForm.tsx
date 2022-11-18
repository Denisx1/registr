import React, { FC, useContext, useState } from "react";
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import './index.css';


const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)
    return (
        
            <div className="form">
                <input className="email"
                    onChange={e=>setEmail(e.target.value)}
                    value= {email}
                    type="text"
                    placeholder="Email"
                />
                <input className="pass"
                    onChange={e=>setPassword(e.target.value)}
                    value= {password}
                    type="password"
                    placeholder="Password"
                />
                <button onClick={()=> store.login(email, password)} className='login'>
                    Login
                </button>
                <button onClick={()=> store.registration(email, password)} className=''>
                    Registration
                </button>
            </div>
           
    )
}

export default observer(LoginForm)