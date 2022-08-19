import "./style.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Field, reduxForm, submit } from "redux-form";
import Home from "./home";

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const data = localStorage.getItem("user data");
  let getEmail = document.getElementById("emailInput");
  let getPassword = document.getElementById("passwordInput");

  const submitButton = () => {
    console.log(getEmail);
    console.log(getPassword);
    console.log(data);
    if (getPassword.value && getEmail === data) {
    } else {
      alert("sorry you are not register..");
    }
  };

  const clear = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <div className="main">
      <div className="center">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Login form</h1>

            <label text>Email</label>
            <br />
            <br />
            <div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="email"
                id="emailInput"
              />
            </div>
          </div>

          <br />
          <div>
            <label>password</label>
            <br />
            <br />
            <div>
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="password"
                id="passwordInput"
              />
            </div>
          </div>

          <br />
          <div className="button">
            <button
              type="submit"
              disabled={pristine || submitting}
              onClick={submitButton}
            >
              Login
            </button>
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={(reset, clear)}
            >
              clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default reduxForm({
  form: "simple",
})(SimpleForm);
