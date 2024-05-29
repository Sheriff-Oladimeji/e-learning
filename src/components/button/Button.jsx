/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Button = ({ url, value, width, onClick }) => {
  return (
    <Link
      to={url}
      className={`p-3 rounded-xl px-6 bg-blue text-white border-none text-center font-semibold ${width}`}
      onClick={onClick}
    >
      {value}
    </Link>
  );
};

export default Button;
