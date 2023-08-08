import { useState } from "react";
import allCourses from "../../data/courses/courses";
import Button from "../button/Button";
const Courses = () => {
  const [courses, setcourses] = useState(allCourses);

  const filterCategory = (category) => {
    setcourses(allCourses.filter((course) => course.category === category));
  };
  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row  gap-10 justify-between">
        <h1 className="font-bold text-3xl md:text-4xl text-blue">
          Popular <span className="text-yellow">Courses</span>
        </h1>
        <div className="bg-[#E6EFFE] flex flex-wrap items-center gap-4 py-3 px-2 rounded-2xl">
          <Button value="All" url="" onClick={() => setcourses(allCourses)} />
         <button onClick={() => filterCategory("Design")}>Design</button>
<button onClick={() => filterCategory("Development")}>Development</button>
<button onClick={() => filterCategory("Business")}>Business</button>
<button onClick={() => filterCategory("Marketing")}>Marketing</button>
<button onClick={() => filterCategory("Data Science")}>Data Science</button>

        </div>
      </div>

      <main className="grid md:grid-cols-3 gap-8 mt-12">
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
                  {course.initialPrice && <span>{course.initialPrice}</span>}
                  {course.discount && <small>{course.discount}</small>}
                </div>
                <button className="bg-none outline-none border-none text-blue font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Courses;
