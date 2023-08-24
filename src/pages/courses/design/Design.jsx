import Courses from "../../../components/courses/Courses"
import { design } from "../../../data/courses/courses"
const buttons = [
  {
    id: 1,
    title: "PhotoShop",
  },
  {
    id: 2,
    title: "UI/UX",
  },
  {
    id: 3,
    title: "Adobe",
  },
  {
    id: 4,
    title: "Photography",
  },
  {
    id: 5,
    title: "Canva",
  },
  {
    id: 6,
    title: "3D  Design",
  },
  {
    id: 7,
    title: "Figma",
  },
 
 
];
const Design = () => {
  return (
      <section className="mt-28 md:mt-6 w-[90%] mx-auto mb-20">
  
      <Courses data={design} category="Design Courses"  buttons={buttons}/>
    </section>
  
  )
}

export default Design