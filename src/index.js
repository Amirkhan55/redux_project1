import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { formValueSelector } from "redux-form";
import store from "./store";
import showResults from "./form/showResults";
import SimpleForm from "./form/simpleForm";
const rootEl = document.getElementById("root");
const Values = formValueSelector("simpleForm");
ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h1>Login form</h1>
      <SimpleForm onSubmit={showResults} />
      <Values form="simpleForm" />
    </div>
  </Provider>,
  rootEl
);
