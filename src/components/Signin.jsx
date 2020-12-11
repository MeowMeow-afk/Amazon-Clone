import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./signin.css";
import { auth } from "../firebase.js";
function Signin() {
  const History = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        History.push("/");
      })
      .catch((error) => alert(error?.message));
  };
  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          History.push("/");
        }
      })
      .catch((error) => alert(error?.message));
  };
  return (
    <div className="signin">
      <div className="sigin__inner">
        <Link to="/">
          <img
            className="amazon__logo__signin"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="amazon-logo"
          />
        </Link>
        <form className="sigin__form">
          <h1
            style={{
              fontSize: "4rem",
            }}
          >
            Sign-in
          </h1>
          <div className="signin__form__inner">
            <h4>Email</h4>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signin__form__inner">
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={signIn} className="btn signin_btn" type="submit">
            Signin
          </button>
          <div className="sigin__terms">
            <p>
              By signing-in you agree to the amaz00nEE condition of use and
              sale.Please see our privacy notice our cookies Notice and or
              Internet based ad notice
            </p>
          </div>
          <button onClick={Register} className="Create__acc" type="submit">
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
