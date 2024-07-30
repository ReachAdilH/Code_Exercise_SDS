import React from "react";
import "./LoginAttemptList.css";
import { useState } from "react";

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => {
    const [filter, setfilter] = useState('');
    return (
        <div className="Attempt-List-Main">
            <p>Recent activity</p>
            <input type="input" placeholder="Filter..." onChange={e => setfilter(e.target.value)} />
            <ul className="Attempt-List">
                {props.attempts?.filter(d => d?.login.includes(filter)).map(d =>

                    <LoginAttempt>{d.login}</LoginAttempt>
                )}
            </ul>
        </div>
    )
};

export default LoginAttemptList;