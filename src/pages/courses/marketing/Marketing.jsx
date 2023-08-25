import Courses from "../../../components/courses/Courses";
import { marketing } from "../../../data/courses/courses";

const buttons = [
  {
    id: 1,
    title: "HTML5",
  },
  {
    id: 2,
    title: "CSS3",
  },
  {
    id: 3,
    title: "JavaScript",
  },
  {
    id: 4,
    title: "Front-End Frameworks",
  },
  {
    id: 5,
    title: "Responsive Web Design",
  },
  {
    id: 6,
    title: "Search Engine Optimization (SEO)",
  },
  {
    id: 7,
    title: "Debugging and Troubleshooting",
  },
  {
    id: 8,
    title: "Web Performance Optimization",
  },
  {
    id: 9,
    title: "Databases",
  },
  {
    id: 10,
    title: "Server-Side Programming",
  },
  {
    id: 11,
    title: "Version Control Systems",
  },
];
const Marketing = () => {
  return (
    <section className="mt-28 md:mt-6 w-[90%] mx-auto mb-20">
      <Courses data={marketing} category="Marketing Courses" buttons={buttons} />
    </section>
  );
};

export default Marketing;
