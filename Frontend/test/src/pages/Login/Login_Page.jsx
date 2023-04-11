import React, {useEffect, useState} from "react";
import BasicButton from "../../components/basicButton/basicButton";
import style from "./style.css"
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const LoginPage = () => {
  const [signUp, setSignUp] = React.useState(false);
  const [loggingIn, setLoggingIn] = React.useState(false);
  const [createAccount, setCreateAccount] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [loggedIn, setLoggedIn] = useState(null);
  const [error, setError] = useState(null);

  const signUpToHome = () => {
    document.querySelector('form.sign-up-form').submit();
    window.location.href = "/home";
  }

  useEffect(() => {
    if(loggedIn && loggedIn.message == "login success!"){
      window.location.href = "/home";
    }
  },[loggedIn])

  useEffect(() => {
    if(createAccount){
      window.location.href = "/home";
    }
  },[createAccount])

  if(!signUp){
    return (
      <div className="login-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px"}}>
          <div className={"sign-in"}>Login</div>
          <form className={"sign-in-form"}>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              label={"Username"} //optional
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label={"Password"} //optional
              type="password"
            />
            <div className={"button-set"}>
              <Button variant="outlined" 
                  onClick={() => fetch(`http://localhost:8000/user/login?id=` + username + 
                    '&password=' + password)
                    .then(res => res.json())
                    .then(
                      (result) => {
                        setLoggedIn(result);
                        console.log(result.message)
                      },
                      (error) => {
                        setError(error);
                        console.log(error)
                      }
              )}>Login</Button>
            </div>
            <div>
              <Button variant="outlined" onClick={() => setSignUp(true)}>Sign Up</Button>
            </div>
            </form>
      </div>
    );
  }
  else{
    return (
      <div className="login-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px"}}>
        <div className={"signup"}>Sign Up</div>
        <form className={"sign-up-form"}>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              label={"Name"} 
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              label={"Email"} 
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label={"Password"}
              type="password"
            />
            <TextField
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              label={"Confirm Password"} 
              type="password"
            />
          <div>
            <Button variant="outlined" onClick={() => 
              fetch('http://localhost:8000/user/account', {  
                method: 'POST',
                body: JSON.stringify({
                  user_id: 1,
                  username: username,
                  password: password,
                  email: email,
                  confirm_password: confirmPassword,
               })})
              .then(response => response.json())
              .then(result => {
                setCreateAccount(result)
                console.log(result)
              })
            }>Create Account</Button>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginPage;



