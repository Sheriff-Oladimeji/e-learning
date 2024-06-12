import data from "../../data/testimonial/testimonial.json";

const Testimonials = () => {
  return (
    <section className="w-[90%] mx-auto my-20">
      {/* <div className="w-[730px] h-[730px] opacity-50 z-[1] bg-lightslateblue absolute rounded-full" /> */}
      <div className="flex flex-col items-center mb-10 z-[2]">
        <h1 className="my-8 text-4xl font-bold text-center md-text-6xl text-midnightBlue">
          Testimonials
        </h1>
        <p className="max-w-2xl text-xl text-center">
          Discover why more than 20,000 students have entrusted their education
          to us, and join our esteemed learning community today
        </p>
      </div>
      <main className="grid w-full gap-8 md:grid-cols-3 sm:grid-cols-2">
        {data.map((card) => (
          <div
            key={card.id}
            className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full p-4 py-4 rounded-md"
          >
            <div className="flex flex-wrap items-start w-full gap-4 mb-3">
              <img
                src={card.image}
                alt={card.name}
                className="object-cover w-10 h-10 rounded-full"
              />

              <div className="flex flex-col">
                <h4 className="font-semibold text-blue">{card.name}</h4>
                <p>Web Designer </p>
              </div>
              <div className="flex items-center">
                <p className=" text-yellow">★ ★ ★ ★ ★</p>
                <span>(4.6)</span>
              </div>
            </div>
            <p className="text-[16px]">{card.testimony}</p>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Testimonials;
