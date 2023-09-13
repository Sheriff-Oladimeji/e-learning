import { useState } from "react";
import { allCourses } from "../../data/templates/alltem";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const AllTemplate = () => {
  
 
  const dispatch = useDispatch();
  const [courses, setCourses] = useState(allCourses);

  const [selectedCategory, setSelectedCategory] = useState("All"); // Initialize with 'All'

  const filterCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setCourses(allCourses);
    } else {
      setCourses(allCourses.filter((course) => course.category === category));
    }
  };
  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row  gap-10 justify-between">
        <h1 className="font-bold text-3xl md:text-4xl text-midnightBlue">
          All <span className="text-yellow">Templates</span>
        </h1>
        <div className=" flex flex-wrap items-center gap-4 py-3 px-2 rounded-2xl">
          <Button value="All" url="" onClick={() => setCourses(allCourses)} />
          <button
            onClick={() => filterCategory("Popular")}
            className={`${selectedCategory === "Popular" ? "bg-blue text-white" : ""
              }  p-2 rounded-xl   border-none  text-center `}
          >
            Popular
          </button>
          <button
            onClick={() => filterCategory("New")}
            className={`${selectedCategory === "New" ? "bg-blue text-white" : ""
              }  p-2 rounded-xl px-6   border-none  text-center `}
          >
            New
          </button>
          <button
            onClick={() => filterCategory("Price")}
            className={`${selectedCategory === "Price" ? "bg-blue text-white" : ""
              }  p-2 rounded-xl   border-none  text-center `}
          >
            Price
          </button>
        </div>
      </div>

      <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-lg shadow-lg  duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[200px] object-cover rounded-t-lg "
            />
            <div className="py-3 flex flex-col  gap-3 w-full px-4 ">
              <div className="flex gap-4 items-center justify-between">
                <p className="text-blue">{course.category}</p>
                <span className=" text-gray-400 rounded-2xl py-1 px-2 text-sm">
                  {course.badge}
                </span>
              </div>
              <Link className="text-xl font-bold text-darkblue" to={`/template/${course.id}`}>{course.title}</Link>

              <div>
                <p>{course.tutor}</p>
                <div className="flex items-center">
                  <p className="text-yellow">★★★★★</p>
                  <span>{course.rating}</span>
                </div>
                <div className="my-3">
                  <span>{course.description}</span>
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
                  onClick={() => {
                    dispatch(addToCart(course));
                    toast.success("Item added to cart", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  }}
                >
                  Add to Cart
                </button>
              </div>
              <ToastContainer />
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default AllTemplate;
