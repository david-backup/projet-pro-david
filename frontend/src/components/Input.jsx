import PropTypes from "prop-types";

const Input = ({ type, id, name, placeholder, required, onChange, value }) => {
  return (
    <input
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
    ></input>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
