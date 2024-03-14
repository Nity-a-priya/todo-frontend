import "../styles/login.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getRequest } from "../helpers/helpers";

const Login = () => {
  return (
    <div className="main_div">
      <h1 className="greeting">Welcome!</h1>
      <h3 className="description">Add your Todos securely..</h3>
      <button className="login_button">
        <a href="auth/github" className="a">
          Login using Github
        </a>
      </button>
    </div>
  );
};

export default Login;
