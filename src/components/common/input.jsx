import React from "react";

const Input = ({ name, label, value, error, handleChange, type = "text" }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={name === "username"}
        value={value}
        onChange={handleChange}
        id={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
