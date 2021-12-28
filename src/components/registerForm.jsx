import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import { validate, handleChange, handleSubmit } from "./common/form";
const RegisterForm = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState({});
  const schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  const doSubmit = () => {
    console.log("Registered");
  };

  return (
    <div className="form">
      <h1>Register</h1>
      <form
        onSubmit={(e) => handleSubmit(e, setErrors, register, schema, doSubmit)}
      >
        <Input
          name="username"
          value={register.username}
          label="Username"
          handleChange={(e) =>
            handleChange(e, errors, register, setRegister, setErrors, schema)
          }
          error={errors.username}
        />
        <Input
          name="password"
          value={register.password}
          label="Password"
          type="password"
          handleChange={(e) =>
            handleChange(e, errors, register, setRegister, setErrors, schema)
          }
          error={errors.password}
        />
        <Input
          name="name"
          value={register.name}
          label="Name"
          handleChange={(e) =>
            handleChange(e, errors, register, setRegister, setErrors, schema)
          }
          error={errors.name}
        />

        <button
          className="btn btn-primary"
          disabled={validate(register, schema)}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
