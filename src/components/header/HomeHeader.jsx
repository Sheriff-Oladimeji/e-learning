/* eslint-disable react/no-unescaped-entities */


import Button from "../button/Button";
const HomeHeader = () => {
  return (
    <header className="flex  flex-col-reverse md:flex-row items-center justify-between mb-8  gap-8">
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
      <div className="flex-1 w-full">
        
     </div>
    </header>
  );
};

export default HomeHeader;
