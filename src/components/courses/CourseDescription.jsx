import { useParams } from "react-router-dom";

const CourseDescription = ({ data }) => {
    const { courseId } = useParams();
     const selectedCourse = data.find((room) => room.id === parseInt(roomId));
     
     if (!selectedCourse) {
       return <div>Course  not found.</div>;
     }

 
  return (
    <div>CourseDescription</div>
  )
}

export default CourseDescription