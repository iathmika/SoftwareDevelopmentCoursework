import React from 'react';
import BasicButton from "../../components/basicButton/basicButton";
import style from "./style.css"
import {NavLink} from "react-router-dom";


const LoginPage = () => {
  const [signUp, setSignUp] = React.useState(false);
  const handleLoginButton = () => {
    setSignUp(!signUp);
  }
  const signInToHome = () => {
    document.querySelector('form.sign-in-form').submit();
    window.location.href = "/home";
  }
  const signUpToHome = () => {
    document.querySelector('form.sign-up-form').submit();
    window.location.href = "/home";
  }

  if(!signUp){
    return (
      <div className="login-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px"}}>
          <div className={"sign-in"}>Sign In</div>
          <form action={"/login"} method={"post"} className={"sign-in-form"}>
            <input placeholder={"Name"} />
            <input placeholder={"Password"} />
            <div className={"button-set"}>
              <button type="submit" onClick={signInToHome} className="svg-button">
                <img src="svg/login.svg" className={"svg-icon"}/>
              </button>
              <BasicButton svg="svg/signup.svg" handleButtonClick={handleLoginButton}/>
            </div>
          </form>
      </div>
    );
  }
  else{
    return (
      <div className="login-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px"}}>
        <div className={"signup"}>Sign Up</div>
        <form action={"/login"} method={"post"} className={"sign-up-form"}>
          <input placeholder={"Name"} />
          <input placeholder={"Email"} />
          <input placeholder={"Password"} />
          <input placeholder={"Confirm Password"} />
          <button type="submit" onClick="redirectToHome()" className="svg-button">
            <img src="svg/check.svg" className={"svg-icon"}/>
          </button>
        </form>
      </div>
    );
  }
};

export default LoginPage;



