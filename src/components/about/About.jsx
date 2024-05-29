import double from "../../assets/double.png";
import about from "../../data/about/about";
import { TfiHeadphoneAlt } from "react-icons/tfi";
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
  let integer = [1, 2, 4];
  integer.conc;
  return (
    <section className="mb-12">
      <div className="my-6 text-center">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl text-midnightBlue">
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
              <h4 className="mb-2 font-semibold ">{item.title}</h4>
              <small className="text-lightslateblue">{item.desc}</small>
            </div>
          </div>
        ))}
      </main>
      <div className="flex flex-col items-center justify-between gap-20 mt-14 md:flex-row md:gap-48">
        <img src={double} alt="" className="h-[500px] object-contain" />
        <div className="flex flex-col gap-8 ">
          <h2 className="text-2xl font-semibold text-center md:text-3xl text-darkslateblue md:text-start">
            Embrace <span className="text-yellow">Limitless</span> Learning
            Opportunities, Accessible Anytime and
            <span className="text-yellow">Anywhere</span>.
          </h2>
          <p className="text-xl text-center text-lightslateblue md:text-start">
            Elevate your skills through our exceptional platform, featuring
            world-class courses, certificates, and a vast repository of online
            knowledge
          </p>
          <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center gap-3 lg:flex-row"
              >
                <span className="bg-[#E6EFFE] p-2 rounded-full text-[#BD5C17]">
                  {feature.icon}
                </span>
                <p className="text-center text-darkblue">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
