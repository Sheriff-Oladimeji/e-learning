import { useState } from "react";
import Button from "../button/Button";
import logo from "../../assets/Logo.png"
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const links = [
  {
    id: 1,
    title: "Courses",
    url: "/courses",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "Template",
    url: "/template",
  },

  {
    id: 4,
    title: "Become a tutor",
    url: "/contact",
  },
];



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="py-4 fixed top-0 left-0 z-50 w-full bg-white shadow-md md:shadow-none md:relative h-20">
      <div className="hidden md:flex w-[90%] mx-auto  justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="flex items-center gap-10 text-lightslateblue ">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              className="font-semibold text-lightslateblue"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex gap-8 items-center">
          <Link to="/search">
            <GoSearch size={25} />
          </Link>
          <Link to="/cart">
            <BsCart3 size={25} />
          </Link>

          <Link
            to="/auth/login"
            className="border p-2 border-[#B1B5BB] rounded-xl px-6  text-darkblue font-semibold"
          >
            Login
          </Link>
          <Button url="/auth/signup" value="Sign Up" />
        </div>
      </div>

      <div className="flex md:hidden w-[90%] mx-auto  justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/search">
            <GoSearch size={30} />
          </Link>
          <Link to="/cart">
            <BsCart3 size={30} />
          </Link>
          <button onClick={handleNav}>
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden w-[60%] h-screen bg-white top-0 left-0 fixed z-10 duration-500 px-8 py-8"
            : "md:hidden w-[50px] h-screen bg-white top-0 left-[-100%] fixed z-10 duration-500"
        }
      >
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex flex-col gap-10 z-50 pt-12 ">
          {links.map((link) => (
            <Link
              to={link.url}
              className="text-[20px]"
              key={link.id}
              onClick={handleNav}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-8  flex-col mt-6">
          <Link
            to="/auth/login"
            className="border p-2 border-[#B1B5BB] rounded-xl px-6 text-center w-[120px] text-darkblue font-semibold"
            onClick={handleNav}
          >
            Login
          </Link>
          <Button
            url="/auth/signup"
            value="Sign Up"
            width="w-[120px]"
           onClick={handleNav}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
