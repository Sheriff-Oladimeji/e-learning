/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import Summary from "./Summary";

const CourseDescription = ({ data }) => {
  const { courseId } = useParams();
  const selectedCourse = data.find(
    (course) => course.id === parseInt(courseId)
  );

  if (!selectedCourse) {
    return <div>Course not found.</div>;
  }

  return (
    <section className="grid md:grid-cols-3 mt-28 md:mt-6 w-[90%] mx-auto mb-20  gap-12 md:gap-32">
      <main className="w-full md:col-span-2 flex flex-col gap-6">
        <VideoPlayer/>
        <h1 className="text-2xl md:text-3xl  font-bold text-darkblue">
          {selectedCourse.title}
        </h1>
        <div className="flex flex-col sm:flex-row  gap-4 md:justify-between flex-wrap">
          <p className="text-darkslateblue">
            • <span className="mx-1 ">Category:</span>
            <span className="text-darkblue font-semibold">
              {selectedCourse.category}
            </span>
          </p>
          <p className="text-darkslateblue">
            • <span className="mx-1 ">Instructor:</span>
            <span className="text-darkblue font-semibold">
              {selectedCourse.tutor}
            </span>
          </p>
          <p className="text-darkslateblue">
            • <span className="mx-1 ">Level:</span>
            <span className="text-darkblue font-semibold">
              Beginners - Expert
            </span>
          </p>
        </div>
        <div className="border-t border-[#E6E7E9] py-8 text-darkslateblue my-12">
          <h3 className="text-xl font-bold text-black mb-4 ">
            What is this course all about?
          </h3>
          <p className="mb-2 max-w-xl md:max-w-2xl">
            The Photoshop Master Course: From Beginner to Expert is a
            comprehensive learning experience designed to take you from a novice
            to a proficient user of Adobe Photoshop. Whether you're an aspiring
            graphic designer, a photographer looking to enhance your images, or
            simply someone interested in learning the ins and outs of this
            powerful software, this course is perfect for you.
          </p>
          <p className="mb-2 max-w-xl md:max-w-2xl">
            Throughout this course, you will be guided through the fundamentals
            of Photoshop, gradually building your skills and knowledge to
            achieve expert-level proficiency. The course is structured to
            provide a step-by-step learning approach, ensuring that you grasp
            each concept before moving on to the next.
          </p>
        </div>
      </main>
      <Summary item={selectedCourse} />
    </section>
  );
};

export default CourseDescription;
