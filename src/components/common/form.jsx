import Joi from "joi-browser";

export const validate = (login, schema) => {
  const { error } = Joi.validate(login, schema, { abortEarly: false });
  if (!error) return null;
  const errors = {};
  error.details.forEach((el) => {
    errors[el.path[0]] = el.message;
  });
  return errors;
};
export const validateProperty = ({ id, value }, schema) => {
  const obj = { [id]: value };
  const propSchema = { [id]: schema[id] };
  const { error } = Joi.validate(obj, propSchema);
  return error ? error.details[0].message : null;
};
export const handleSubmit = (e, setErrors, login, schema, doSubmit) => {
  e.preventDefault();
  const errors = validate(login, schema);
  setErrors(errors || {});
  if (errors) return;
  doSubmit();
};

export const handleChange = (
  { currentTarget: input },
  errors,
  login,
  setLogin,
  setErrors,
  schema
) => {
  const errors1 = { ...errors };
  const errorMessage = validateProperty(input, schema);
  if (errorMessage) errors1[input.id] = errorMessage;
  else delete errors1[input.id];
  const newLogin = { ...login };
  newLogin[input.id] = input.value;
  setLogin(newLogin);
  setErrors(errors1);
};
