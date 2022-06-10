const Button = ({ value, method, text }) => {
  return <button onClick={() => method(value + 1)}>{text}</button>;
};

export default Button;
