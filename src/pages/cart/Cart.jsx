import { useSelector } from "react-redux";
import cart from "../../assets/empty-cart.png";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart";
import { AiOutlineDelete } from "react-icons/ai";
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
        <div className="flex flex-col md:flex-row">
          <main className="md:w-[60%]">
            <div className="flex w-full justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-darkblue">
                Shopping Cart
              </h2>
              <p className="text-[#8B919A] font-semibold">
                {cartItems.length} Items
              </p>
            </div>
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex">
                  <img src={item.image} alt={item.name} className="w-[10%]" />

                  <div>
                    <div>
                      <span>{item.category}</span>
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
                    <h2>{item.title}</h2>
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
