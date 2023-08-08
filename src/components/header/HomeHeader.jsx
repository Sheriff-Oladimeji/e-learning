/* eslint-disable react/no-unescaped-entities */

import hero from "../../assets/hero.png"
import Button from "../button/Button";
const HomeHeader = () => {
  return (
    <header className="flex  flex-col-reverse items-center justify-between mb-8 md:flex-row gap-8">
      <div className="flex-1 flex flex-col text-center md:text-start gap-6">
        <h1 className="font-bold text-darkblue text-3xl md:text-5xl leading-snug">
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
    <img src={hero} alt="hero" className="flex-1 h-[400px] object-contain" />
    </header>
  );
};

export default HomeHeader;
