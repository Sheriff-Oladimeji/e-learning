import NewCourses from "../../components/courses/NewCourses"
import HomeHeader from "../../components/header/HomeHeader"


const Home = () => {
  return (
    <main className="mt-28 md:mt-6 w-[90%] mx-auto">
      <HomeHeader />
      <NewCourses/>
   </main>
  )
}

export default Home