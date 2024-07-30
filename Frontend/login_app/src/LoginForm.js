import React from "react";
import './LoginForm.css';
import { useState } from "react";

const LoginForm = (props) => {
    const [formVal, setformVal] = useState({ login: '', password: '' });
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(
            formVal
        );
    }

    return (
        <form className="form">
            <h1>Login</h1>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={e => setformVal({ ...formVal, login: e.target.value })} />
            <label htmlFor="password" >Password</label>
            <input type="password" id="password" onChange={e => setformVal({ ...formVal, password: e.target.value })} />
            <button type="submit" onClick={handleSubmit}>Continue</button>
        </form>
    )
}

export default LoginForm;