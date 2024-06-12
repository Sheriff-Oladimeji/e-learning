/* eslint-disable react/no-unescaped-entities */

import hero from "../../assets/hero.jpeg";
import Button from "../button/Button";
const HomeHeader = () => {
  return (
    <header className="flex flex-col-reverse items-center justify-between gap-8 my-10 md:flex-row">
      <div className="flex flex-col flex-1 gap-6 text-center md:text-start">
        <h1 className="text-3xl font-bold md:leading-normal text-darkblue md:text-5xl">
          Unleash Your <span className="text-yellow">Creativity</span> and Make
          Your Mark on the
          <span className="text-yellow"> World</span>
        </h1>
        <p className="text-lg text-lightslateblue">
          Embark on a journey of discovery with our platform's expert guidance
          and immersive hands-on projects that help you harness your creative
          energy.
        </p>
        <Button
          value="Explore Courses"
          url="/courses"
          width="mx-auto md:mx-0 w-[180px]"
        />
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <img
          src={hero}
          alt="hero"
          className="w-[165px] h-[300px] object-left object-cover"
        />
        <img
          src={hero}
          alt="hero"
          className="w-[350px] h-[400px] object-cover object-right"
        />
      </div>
    </header>
  );
};

export default HomeHeader;
