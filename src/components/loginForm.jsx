import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import { validate, handleChange, handleSubmit } from "./common/form";

const LoginForm = () => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const doSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div className="form">
      <h1>Login</h1>
      <form
        onSubmit={(e) => handleSubmit(e, setErrors, login, schema, doSubmit)}
      >
        <Input
          name="username"
          value={login.username}
          label="Username"
          handleChange={(e) =>
            handleChange(e, errors, login, setLogin, setErrors, schema)
          }
          error={errors.username}
        />
        <Input
          name="password"
          value={login.password}
          label="Password"
          type="password"
          handleChange={(e) =>
            handleChange(e, errors, login, setLogin, setErrors, schema)
          }
          error={errors.password}
        />
        <button className="btn btn-primary" disabled={validate(login, schema)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
