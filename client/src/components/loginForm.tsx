import React, { FC, useContext, useState } from "react";
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import './index.css';


const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { store } = useContext(Context)
    const [conditionForm, setConditionForm] = useState(false)

    return (
            <div className="container">
                <div className="slider"></div>
                    <div className="btn">
                        <button className="signup" onClick={()=>setConditionForm(true)}>Signup</button>
                        <button className="login" onClick={()=>setConditionForm(false)} >Login</button>
                    </div>
                <div className="formSection">
                    <div className="login-box">
                        <input className="email ele" onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            placeholder="Email" />
                        <span>email</span>
                        <input className="password ele"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Password" />
                        <span>password</span>
                        <button onClick={() => store.login(email, password)} className='clkbtn'>
                            Login
                        </button>
                        <hr/>
                        <a href="#">Forgot Password?</a>
                </div>
                        <div className="signup-box">
                            <input className="email ele" onChange={e => setEmail(e.target.value)}
                                value={email}
                                type="text"
                                placeholder="Email" />
                            <span>email</span>
                            <input className="password ele"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Password" />
                            <span>password</span>
                            <button onClick={()=> store.registration(email, password)} className='clkbtn'>
                                signUp
                            </button>
                        </div>
                    </div>
            </div>      
    )         
}

export default observer(LoginForm)