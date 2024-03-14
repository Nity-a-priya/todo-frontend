import "../styles/login.css";

const Login = () => {
  return (
    <div className="main_div">
      <h1 className="greeting">Welcome!</h1>
      <h3 className="description">Add your Todos securely..</h3>
      <a className="login_button a" href="/auth/github">
        Login using Github
      </a>
    </div>
  );
};

export default Login;
