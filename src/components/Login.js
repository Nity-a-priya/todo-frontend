import "../styles/login.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = () => {
  return (
    <div className="main-div">
      <h1>Welcome!</h1>
      <h3>Add your Todos securely..</h3>
      <button>
        <Link to="/auth/github" className="a">
          Login using Github
        </Link>
        {/* <a href="/auth/github">Login using Github</a> */}
      </button>
    </div>
  );
};

export default Login;
