
import { useParams } from "react-router-dom";

const CourseTemDescription = ({ courses }) => {
  const { courseId } = useParams();

  const selectedCourse = courses.find(
    (course) => course.id === parseInt(courseId)
  );

  return (
    <div className="bg-black">
      {selectedCourse ? (
        <div>
          <h1>{selectedCourse.title}</h1>
          <p>{selectedCourse.description}</p>
        </div>
      ) : (
        <div>Course not found.</div>
      )}
    </div>
  );
};

export default CourseTemDescription;
