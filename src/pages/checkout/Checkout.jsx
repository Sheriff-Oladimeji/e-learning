
import payment from "../../assets/payment.png"
import Button from "../../components/button/Button";
import { useCartStore } from "../../store";


const Checkout = () => {
  const cartItems =  useCartStore(state => state.cart)
  const initialPrice = cartItems.reduce((total, item) => {
    const price = item.initialPrice ? item.initialPrice : item.price;
    return total + price;
  }, 0);
  const discountedPrices = cartItems.map((item) => {
    return item.discount ? item.initialPrice * (1 - item.discount / 100) : null;
  });

  const newPrice = discountedPrices.reduce(
    (total, discountedPrice) => total + discountedPrice,
    0
  );

  const totalPrice = initialPrice - newPrice;

  return (
    <section className="mt-28 md:mt-6 w-[90%] md:w-[80%] mx-auto mb-20">
      <h1 className="font-bold text-3xl text-darkblue">Checkout</h1>
      <div className="flex flex-col md:flex-row justify-between  gap-8 md:gap-48 w-full">
        <main className="flex-1  flex flex-col gap-3">
          <h3 className="text-xl text-lightslateblue font-semibold">
            Personal Details
          </h3>
          <form action="" className="flex flex-col gap-4">
            <div className="form-control">
              <label htmlFor="firstName" className="label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id=""
                className="input"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-control">
              <label htmlFor="lastName" className="label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id=""
                className="input"
                placeholder="Enter your surname"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="input"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-control">
              <label htmlFor="select" className="label">
                Country/ Region
              </label>
              <select name="" id="" className="input">
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
              </select>
            </div>
            <div className="input flex justify-between items-center">
              <span className="flex items-center">
                <input type="radio" name="" id="" className="input" checked />
                <span>💳card</span>
              </span>
              <img src={payment} alt="" />
            </div>
            <div className="form-control">
              <label htmlFor="name" className="label">
                Name on Card
              </label>
              <input
                type="text"
                name="name"
                id=""
                className="input"
                placeholder="Name on Card"
              />
            </div>
            <div className="form-control">
              <label htmlFor="number" className="label">
                Card Number
              </label>
              <input
                type="number"
                name="number"
                id=""
                className="input"
                placeholder="Card Number"
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="form-control w-[50%]">
                <label htmlFor="date" className="label">
                  Expiration date
                </label>
                <input
                  type="text"
                  name="date"
                  id=""
                  className="input"
                  placeholder="MM/YY"
                />
              </div>
              <div className="form-control w-[30%] ">
                <label htmlFor="CVV" className="label">
                  CVV
                </label>
                <input
                  type="number"
                  name="CVV"
                  id=""
                  className="input"
                  placeholder="123"
                />
              </div>
            </div>
          </form>
        </main>
        <aside className="flex-1  flex flex-col gap-3">
          <h3 className="text-xl text-lightslateblue font-semibold">
            Course Order Details
          </h3>

          <div className="flex flex-col gap-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative md:flex items-center gap-4"
              >
                <div className="flex flex-col md:flex-row bg-white rounded-lg md:rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full rounded-t-lg max-h-[200px] md:max-h-[300px] md:rounded-none md:rounded-l-xl md:w-[40%] object-cover "
                  />

                  <div className="md:w-[70%] p-4 flex flex-col gap-3">
                    <h2 className="text-sm text-lightslateblue">
                      {item.title}
                    </h2>
                    <div className="flex items-center gap-4">
                      <h4 className="text-lg font-bold text-darkblue">
                        {item.price.toLocaleString("en-NG", {
                          style: "currency",
                          currency: "NGN",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </h4>
                      {item.initialPrice && (
                        <p className="text-lightslateblue line-through text-sm ">
                          {item.initialPrice.toLocaleString("en-NG", {
                            style: "currency",
                            currency: "NGN",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-[#E6E7E9] rounded-lg p-4 flex flex-col gap-3 text-[#8B919A] mt-8">
            <h4 className="text-center">Summary</h4>
            <p className="flex justify-between items-center">
              Initial Price:
              <span>
                {initialPrice.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </p>

            <p className="flex justify-between items-center">
              Discount:
              <span>
                {newPrice.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </p>
            <p className="flex justify-between items-center">
              Total Price:
              <span className="text-black font-semibold">
                {totalPrice.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </p>
            <Button value="Complete Your Order" width="w-full" />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Checkout;
