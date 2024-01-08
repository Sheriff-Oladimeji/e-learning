import cart from "../../assets/empty-cart.png";

import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cart);
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

  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="mt-28 md:mt-6 w-[90%] mx-auto">
      {cartItems.length === 0 ? (
        <div className="flex items-center flex-col justify-center mx-auto w-full md:w-[70%] mb-16">
          <div className="flex w-full justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl fon]=t-bold text-darkblue">
              Shopping Cart
            </h2>
            <p className="text-[#8B919A] font-semibold">0 courses</p>
          </div>
          <div className="flex flex-col gap-4 border border-[#E6E7E9] rounded-md w-full items-center pb-4 ">
            <img src={cart} alt="empty cart" className="w-[50%]" />
            <p className="text-center md:text-start">
              Your cart is empty. Its time to fill it with knowledge! Browse our
              courses and add items that interest you
            </p>
            <Button value="Browse Courses" url="/courses/development" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row mb-16  justify-between">
          <main className="md:w-[70%] xl:w-[60%]">
            <div className="flex w-full md:w-[90%] justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-darkblue">
                Shopping Cart
              </h2>
              <p className="text-[#8B919A] font-semibold">
                {cartItems.length} Items
              </p>
            </div>
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
                      <div className="flex justify-between items-center">
                        <span className="text-blue">{item.category}</span>
                        <div className="flex items-center gap-2">
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
                      <h2 className="text-lg font-bold text-darkblue">
                        {item.title}
                      </h2>
                      <p>{item.tutor}</p>
                      <div className="flex items-center gap-2">
                        <span className="bg-brown text-white rounded-2xl py-1 px-2 text-sm">
                          {item.badge}
                        </span>
                        <div className="flex items-center">
                          <p className="text-yellow">★★★★★</p>
                          <span>{item.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 flex-wrap text-lightslateblue">
                        <span>• 20 Lectures </span>
                        <span>• 18 hours </span>
                        <span>• Beginners- Expert </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-white rounded-full flex items-center justify-center p-2 px-4 text-lg absolute md:static top-2 right-2 "
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </main>
          <aside className="md:w-[28%] xl:w-[25%] mt-20 md:mt-0">
            <div className="border border-[#E6E7E9] rounded-lg p-4 flex flex-col gap-3 text-[#8B919A]">
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
              <Button
                value="Proceed to Checkout"
                url="/checkout"
                width="w-full"
              />
              <Link
                className="p-2 rounded-xl px-6 bg-transparent  border  text-center font-semibold"
                to="/courses/development"
              >
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;
