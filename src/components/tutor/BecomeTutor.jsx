import Button from "../button/Button";
import tutorImg from "../../assets/Ellipse 41.png";
const BecomeTutor = () => {
  return (
    <div className="relative grid items-center grid-cols-2 gap-16 py-4">
      <div className="">
        <h2 className="text-[40px] font-bold text-midnightBlue">
          Become an Instructor
        </h2>
        <div className="mt-6 text-xl leading-9 text-gray-600">
          Join us in shaping the future of education and become part of a
          supportive network of educators dedicated to empowering learners
          worldwide. Together, let's create an engaging and transformative
          learning experience.
        </div>
        <div className="mt-16">
          <Button value="Start Your Teaching Journey Now" />
        </div>
      </div>
      <div>
        <img src={tutorImg} className="transform scale-x-[-1] relative" />
      </div>
    </div>
  );
};

export default BecomeTutor;
