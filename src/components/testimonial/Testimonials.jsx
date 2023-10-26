import data from "../../data/testimonial/testimonial.json"

const Testimonials = () => {
  return (
    <section className="w-[90%] mx-auto my-20">
      <div className="flex flex-col items-center mb-10">
        <h1 className="font-bold text-4xl md-text-6xl text-center text-midnightBlue my-8">
          Testimonials
        </h1>
        <p className="text-xl  text-center max-w-2xl">
          Discover why more than 20,000 students have entrusted their education
          to us, and join our esteemed learning community today
        </p>
      </div>
      <main className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 w-full">
        {data.map((card) => (
          <div
            key={card.id}
            className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full p-4 py-4 rounded-md"
          >
            <div className="flex  gap-4 mb-3 items-start flex-wrap w-full">
              <img
                src={card.image}
                alt={card.name}
                className="w-10 h-10 object-cover rounded-full"
              />

              <div className="flex flex-col">
                <h4 className=" text-blue font-semibold">{card.name}</h4>
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
