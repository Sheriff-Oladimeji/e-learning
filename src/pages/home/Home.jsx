import About from "../../components/about/About";
import CoursesHome from "../../components/courses/CoursesHome";
import NewCourses from "../../components/courses/NewCourses";
import HomeHeader from "../../components/header/HomeHeader";
import Testimonials from "../../components/testimonial/Testimonials";
import BecomeTutor from "../../components/tutor/BecomeTutor";

const Home = () => {
  return (
    <main className="mt-28 md:mt-6 w-[90%] mx-auto">
      <HomeHeader />
      <NewCourses />
      <CoursesHome />
      <About />
      <Testimonials />
      <BecomeTutor />
    </main>
  );
};

export default Home;
