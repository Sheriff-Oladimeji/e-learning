import Courses from "../../../components/courses/Courses";

import { development } from "../../../data/courses/courses";
const buttons = [
  {
    id: 1,
    title: "HTML5",
  },
  {
    id: 2,
    title: "CSS3",
  },
];
const Development = () => {
  return (
    <section className="mt-28 md:mt-6 w-[90%] mx-auto mb-20">
      <Courses
        data={development}
        buttons={buttons}
        category="Development Courses"
      />
    </section>
  );
}

export default Development