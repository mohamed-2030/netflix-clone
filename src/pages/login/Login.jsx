import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="top">
          <div className="logo">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt=""
            />
          </div>
        </div>
        <div className="wrraper">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="email address" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
            <span>
              New to Netflix? <b>Sign up now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
