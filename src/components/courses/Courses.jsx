/* eslint-disable react/prop-types */
import bgImg from "../../assets/course-bg.png"
import Button from "../button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Courses = ({ buttons, data,  category, type}) => {
    const [courses, setCourses] = useState(data);
 const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [header, setHeader] = useState(category)
     const handleAddToCart = (course) => {
       dispatch(addToCart(course));
      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     };
  const handleHeaderChange = (e) => {
    setHeader(e.target.innerText)
  }

    const filterCategory = (category) => {
      setSelectedCategory(category);
      if (category === "All") {
        setCourses(data);
      } else {
        setCourses(data.filter((course) => course.badge === category));
      }
    };
  return (
    <section>
      <img src={bgImg} alt="" />
      <div className="my-6 flex flex-col gap-6">
        <h2 className="text-xl text-lightslateblue">In-Demand Skills</h2>
        <div className="flex flex-wrap  gap-8 ">
          {buttons.map((button) => (
            <button
              key={button.id}
              className="py-2 px-3 border text-[15px] outline-none hover:active:outline-none text-black border-[#8B919A] text-center"
              onClick={handleHeaderChange}
            >
              {button.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-10 justify-between">
        <h1 className="font-bold text-2xl md:text-3xl text-darkblue">
          {header}
        </h1>
        <div className=" flex  items-center gap-4 py-3 px-2 rounded-2xl font-semibold">
          <Button value="All" url="" onClick={() => setCourses(data)} />
          <button
            onClick={() => filterCategory("Popular")}
            className={`${
              selectedCategory === "Design" ? "bg-blue text-white" : ""
            }  p-2 rounded-xl   border-none  text-center  bg-[#E6EFFE]`}
          >
            Popular
          </button>
          <button
            onClick={() => filterCategory("Trending")}
            className={`${
              selectedCategory === "Development" ? "bg-blue text-white" : ""
            }  p-2 rounded-xl px-6   border-none  text-center bg-[#E6EFFE]`}
          >
            Trending
          </button>
          <button
            onClick={() => filterCategory("New")}
            className={`${
              selectedCategory === "Business" ? "bg-blue text-white" : ""
            }  p-2 rounded-xl   border-none  text-center bg-[#E6EFFE] `}
          >
            New
          </button>
        </div>
      </div>

      <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-14 mt-12">
        {courses.map((course) => (
          <div key={course.id} className="border rounded-lg shadow-lg ">
            <Link to={`/courses/${type}/${course.id}`}>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[200px] object-cover rounded-t-lg "
              />
            </Link>
            <div className="py-3 flex flex-col  gap-3 w-full px-4 ">
              <div className="flex gap-4 items-center">
                <p className="text-blue">{course.category}</p>
                <span className="bg-brown text-white rounded-2xl py-1 px-2 text-sm">
                  {course.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-darkblue">
                {course.title}
              </h3>
              <div>
                <p>{course.tutor}</p>
                <div className="flex items-center">
                  <p className="text-yellow">★★★★★</p>
                  <span>{course.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2 items-center">
                  <h4 className="text-lg font-bold text-darkblue">
                    {course.price.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </h4>
                  {course.initialPrice && (
                    <span className="text-lightslateblue line-through text-sm ">
                      {course.initialPrice.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  )}
                  {course.discount && (
                    <small className="text-xs">{course.discount}% off</small>
                  )}
                </div>
                <button
                  className="bg-none outline-none border-none text-blue font-semibold"
                  onClick={() => handleAddToCart(course)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
      <ToastContainer />
    </section>
  );
}

export default Courses