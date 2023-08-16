import double from "../../assets/double.png"
import about from "../../data/about/about";
import {TfiHeadphoneAlt} from "react-icons/tfi"
import { BiMoviePlay } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
const features = [
  {
    id: 1,
    icon: <TfiHeadphoneAlt />,
    title: "Expert Instructors",
  },
  {
    id: 2,
    icon: <BiMoviePlay />,
    title: "2000+ Courses",
  },
  {
    id: 3,
    icon: <HiOutlineAcademicCap />,
    title: "Educational Content",
  },
  {
    id: 4,
    icon: <TfiHeadphoneAlt />,
    title: "Interactive Learning",
  },
  {
    id: 5,
    icon: <TfiHeadphoneAlt />,
    title: "Extensive Support",
  },
  {
    id: 6,
    icon: <TfiHeadphoneAlt />,
    title: "Interactive Learning",
  },
];

const About = () => {
  return (
    <section className="mb-12">
      <div className="text-center my-6">
        <h1 className="text-3xl md:text-4xl text-midnightBlue font-bold mb-4">
          What Sets Us Apart
        </h1>
        <p className="text-xl text-lightslateblue">
          Enjoy a multitude of the following advantages by learning with us
        </p>
      </div>
      <main className="grid gap-6 md:grid-cols-3">
        {about.map((item) => (
          <div
            className="py-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex gap-4 px-4 rounded-lg"
            key={item.id}
          >
            <div
              className={`${
                item.id === 1
                  ? "bg-[#F5C158]"
                  : item.id === 2
                  ? "bg-[#D39264]"
                  : "bg-[#5894F5]"
              } h-fit w-fit p-2 rounded-md`}
            >
              <img src={item.icon} alt={item.icon} className="w-10" />
            </div>
            <div>
              <h4 className="font-semibold mb-2  ">{item.title}</h4>
              <small className="text-lightslateblue">{item.desc}</small>
            </div>
          </div>
        ))}
      </main>
      <div className="mt-14 flex flex-col md:flex-row justify-between items-center  gap-20 md:gap-48">
        <img src={double} alt="" className="h-[500px] object-contain" />
        <div className="flex flex-col gap-8  ">
          <h2 className="font-semibold text-2xl md:text-3xl text-darkslateblue">
            Embrace <span className="text-yellow">Limitless</span> Learning
            Opportunities, Accessible Anytime and{" "}
            <span className="text-yellow">Anywhere</span>.
          </h2>
          <p className="text-lightslateblue text-xl">
            Elevate your skills through our exceptional platform, featuring
            world-class courses, certificates, and a vast repository of online
            knowledge
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8  w-full">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex justify-center flex-wrap  md:flex-nowrap gap-3 items-center"
              >
                <span className="bg-[#E6EFFE] p-2 rounded-full text-[#BD5C17]">
                  {feature.icon}
                </span>
                <p className="text-darkblue text-center">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About