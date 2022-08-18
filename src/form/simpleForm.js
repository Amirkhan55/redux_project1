import "./style.css";
import React from "react";
import { Field, reduxForm, submit } from "redux-form";

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="email"
              required
            />
          </div>
        </div>

        <div>
          <label>password</label>
          <div>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="password"
              required
            />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            clear
          </button>
        </div>
      </form>
    </div>
  );
};
export default reduxForm({
  form: "simple",
})(SimpleForm);
