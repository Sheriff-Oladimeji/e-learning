import { useSelector } from "react-redux";
import cart from "../../assets/empty-cart.png";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart";

import Button from "../../components/button/Button";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="mt-28 md:mt-6 w-[90%] mx-auto">
      {cartItems.length === 0 ? (
        <div className="flex items-center flex-col justify-center mx-auto w-full md:w-[70%] mb-16">
          <div className="flex w-full justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-darkblue">
              Shopping Cart
            </h2>
            <p className="text-[#8B919A] font-semibold">0 courses</p>
          </div>
          <div className="flex flex-col gap-4 border border-[#E6E7E9] rounded-md w-full items-center pb-4 ">
            <img src={cart} alt="empty cart" className="w-[50%]" />
            <p className="text-center md:text-start">
              Your cart is empty. It's time to fill it with knowledge! Browse
              our courses and add items that interest you
            </p>
            <Button value="Browse Courses" url="/courses/development" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row mb-16">
          <main className="md:w-[60%]">
            <div className="flex w-full justify-between items-center mb-6">
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
                  className="flex flex-col md:flex-row bg-white rounded-lg md:rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] h-full"
                >
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
                        <p className="text-lightslateblue line-through text-sm ">
                          {item.initialPrice.toLocaleString("en-NG", {
                            style: "currency",
                            currency: "NGN",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </p>
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
              ))}
            </div>
          </main>
          <aside></aside>
        </div>
      )}
    </div>
  );
};

export default Cart;
