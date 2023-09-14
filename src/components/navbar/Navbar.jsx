import { useState } from "react";
import Button from "../button/Button";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";

const links = [
  {
    id: 1,
    title: "Courses",
    url: false,
    subLinks: [
      {
        id: 1,
        title: "Development",
        url: "/courses/development",
      },
      {
        id: 2,
        title: "Design",
        url: "/courses/design",
      },
      {
        id: 3,
        title: "Business",
        url: "/courses/business",
      },
     
      {
        id: 4,
        title: "Marketing",
        url: "/courses/marketing",
      },
    ],
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
  const [openSubLinks, setOpenSubLinks] = useState(false);
   const cartCount = useSelector((state) => state.cart.cartItems.length);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropDown = () => {
    setOpenSubLinks(!openSubLinks);
  };

  const renderSubLinks = (subLinks) => {
    if (openSubLinks) {
      return (
        <div
          className={`md:absolute  left-0
        md:-left-4  mt-2  bg-white  flex-col gap-6 py-4 md:shadow-2xl md:z-50 md:px-4 md:rounded-xl  ${
          openSubLinks ? "flex" : "hidden"
        } `}
        >
          <span
            className="text-[#8B919A]"
          >
            Categories
          </span>
          {subLinks.map((subLink) => (
            <Link
              key={subLink.id}
              to={subLink.url}
              className="font-semibold flex justify-between items-center gap-4 text-darkslateblue"
              onClick={() => {
                handleNav()
                handleDropDown()
              }}
            >
              {subLink.title}
              <MdKeyboardArrowRight />
            </Link>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <nav className="py-4 fixed top-0 left-0 z-50 w-full bg-white shadow-md md:shadow-none md:relative h-20">
      <div className="hidden md:flex w-[90%] mx-auto  justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="flex items-center gap-10 text-lightslateblue">
          {links.map((link) => (
            <div key={link.id} className="relative">
              {link.id === 1 ? (
                <>
                  <span
                    className="font-semibold text-lightslateblue cursor-pointer group"
                    onClick={handleDropDown}
                  >
                    {link.title}
                  </span>
                  {renderSubLinks(link.subLinks)}
                </>
              ) : (
                <Link
                  to={link.url}
                  className="font-semibold text-lightslateblue"
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-8 items-center">
          <Link to="/search">
            <GoSearch size={25} />
          </Link>
          <Link to="/cart" className="relative">
            <BsCart3 size={25} />
            <span className="absolute -top-2 left-4 rounded-full bg-blue p-0.5 px-2 text-sm text-red-50 ">
              {cartCount}
            </span>
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
          <Link to="/cart" className="relative">
            <BsCart3 size={25} />
            <span className="absolute -top-2 left-4 rounded-full bg-blue p-0.5 px-2 text-sm text-red-50 ">
             {cartCount}
            </span>
          </Link>
          <button onClick={handleNav}>
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden w-[60%] h-screen bg-white top-0 left-0 fixed z-10 duration-500 px-8 py-8 shadow-xl"
            : "md:hidden w-[50px] h-screen bg-white top-0 left-[-100%] fixed z-10 duration-500"
        }
      >
        <Link to="/" onClick={handleNav}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex flex-col gap-10  pt-12 ">
          {links.map((link) => (
            <div key={link.id} className="relative">
              {link.id === 1 ? (
                <div className="relative">
                  <span
                    className="font-semibold text-lightslateblue cursor-pointer"
                    onClick={handleDropDown}
                  >
                    {link.title}
                  </span>
                  {renderSubLinks(link.subLinks)}
                </div>
              ) : (
                <Link
                  to={link.url}
                  className="font-semibold text-lightslateblue"
                  onClick={handleNav}
                >
                  {link.title}
                </Link>
              )}
            </div>
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
