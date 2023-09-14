import CourseDescription from "../../../components/courses/CourseDescription"
import { development } from "../../../data/courses/courses"


const DevelopmentDesc = () => {
  return (
    <CourseDescription data={development}/>
  )
}

export default DevelopmentDesc