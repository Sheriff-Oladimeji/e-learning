
import about from "../../data/about/about";



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
            <div >
              <h4 className="font-semibold mb-2  ">{item.title}</h4>
              <small className="text-lightslateblue">{item.desc}</small>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default About