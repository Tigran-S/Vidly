const Select = ({ name, label, value, error, handleChange, type = "text" }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        value={value}
        onChange={handleChange}
        id={name}
        type={type}
        className="form-control"
      >
        <option>Action</option>
        <option>Comedy</option>
        <option>Thriller</option>
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
