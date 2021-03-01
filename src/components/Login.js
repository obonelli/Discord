import Button from '@material-ui/core/Button';
import { auth , provider} from "./../firebase";
import React from 'react'
import "./styles/Login.css";

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="./img/Discord-Logo.png" alt=""
                />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
