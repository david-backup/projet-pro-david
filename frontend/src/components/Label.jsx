import PropTypes from "prop-types";

const Label = ({ htmlFor, text }) => {
  return <label htmlFor={htmlFor}>{text}</label>;
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Label;
