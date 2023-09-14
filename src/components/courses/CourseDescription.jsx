/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

const CourseDescription = ({ data }) => {
    const { courseId } = useParams();
     const selectedCourse = data.find((course) => course.id === parseInt(courseId));
     
     if (!selectedCourse) {
       return <div>Course  not found.</div>;
     }

 
  return (
    <section className="grid md:grid-cols-3 mt-28 md:mt-6 w-[90%] mx-auto mb-20">
      <main className="w-full col-span-2">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
        ></iframe>
        <h1 className="text-xl md:text-2xl font-bold text-darkblue">
          {selectedCourse.title}
        </h1>
        <div className="flex justify-between"></div>
      </main>
      <aside>
        hello
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
          repellat nihil. Esse quae sint architecto corporis excepturi,
          incidunt, ab voluptatem tempora a blanditiis molestiae, exercitationem
          autem eveniet suscipit dolores consequuntur quisquam nemo explicabo
          voluptatum. Porro optio earum voluptatibus aut corrupti.
        </p>
      </aside>
    </section>
  );
}

export default CourseDescription