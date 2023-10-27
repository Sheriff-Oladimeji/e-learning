import Courses from "../../../components/courses/Courses"
import { design } from "../../../data/courses/courses"
const buttons = [
  {
    id: 1,
    title: "PhotoShop",
  },
  {
    id: 2,
    title: "UI/UX Design",
  },
  {
    id: 3,
    title: "Digital Art",
  },
  {
    id: 4,
    title: "Graphic Design",
  },
  {
    id: 5,
    title: "Graphic Design",
  },
  {
    id: 6,
    title: "3D  Design",
  },
  {
    id: 7,
    title: "Graphic Design",
  },
  {
    id: 8,
    title: "Photography",
  },
];
const Design = () => {
  return (
      <section className="mt-28 md:mt-6 w-[90%] mx-auto mb-20">
  
      <Courses data={design} category="Design Courses"  buttons={buttons} type="design"/>
    </section>
  
  )
}

export default Design