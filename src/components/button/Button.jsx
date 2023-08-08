/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Button = ({url, value, width}) => {
  return (
    <Link
      href={url}
      className={`p-2 rounded-xl px-6 bg-blue text-white border-none  text-center font-semibold ${width}`}
    >
      {value}
    </Link>
  );
}

export default Button