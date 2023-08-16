import courses from "../../data/courses/newCourses";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewCourses = () => {
   const dispatch = useDispatch();
  return (
    <section className="mt-20 md:mt-40 mb-20">
      <h1 className="text-3xl md:text-4xl font-bold text-midnightBlue text-center">
        Expand Your <span className="text-yellow">Knowledge</span> with Our
        Newly Added Courses
      </h1>

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
              <div className="flex gap-4 items-center">
                <p className="text-blue">{course.category}</p>
                <span className="bg-brown text-white rounded-2xl py-1 px-2 text-sm">
                  {course.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-darkblue">
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
                    {course.price}
                  </h4>
                  {course.initialPrice && (
                    <span className="text-lightslateblue line-through text-sm ">
                      {course.initialPrice}
                    </span>
                  )}
                  {course.discount && (
                    <small className="text-xs">{course.discount}</small>
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

export default NewCourses;
