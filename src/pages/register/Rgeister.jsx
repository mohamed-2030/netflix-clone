import { useRef, useState } from "react";
import "./register.scss";

const Rgeister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const startHandler = () => {
    const emailInput = emailRef.current.value;

    setEmail(emailInput);
  };
  const finishHandler = (e) => {
    e.preventDefault();
    const passwordInput = passwordRef.current.value;

    setPassword(passwordInput);
  };
  return (
    <div className="register">
      <div className="container">
        <div className="top">
          <div className="logo">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt=""
            />
          </div>
          <button className="login-button">Sign In</button>
        </div>
        <div className="wrraper">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <div className="input">
              <input type="email" placeholder="email address" ref={emailRef} />
              <button className="registerButton" onClick={startHandler}>
                Get Started
              </button>
            </div>
          ) : (
            <form className="input" onSubmit={finishHandler}>
              <input type="password" placeholder="Password" ref={passwordRef} />
              <button className="registerButton">Start</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rgeister;
