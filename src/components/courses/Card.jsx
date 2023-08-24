/* eslint-disable react/prop-types */

const Card = ({
  image,
  category,
  badge,
  name,
  rating,
  price,
  initialPrice,
  tutor,
  discount,
}) => {
  return (
    <div className="border rounded-lg shadow-lg  duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-[200px] object-cover rounded-t-lg "
      />
      <div className="py-3 flex flex-col  gap-3 w-full px-4 ">
        <div className="flex gap-4 items-center">
          <p className="text-blue">{category}</p>
          <span className="bg-brown text-white rounded-2xl py-1 px-2 text-sm">
            {badge}
          </span>
        </div>
        <h3 className="text-xl font-bold text-darkblue">{name}</h3>
        <div>
          <p>{tutor}</p>
          <div className="flex items-center">
            <p className="text-yellow">★★★★★</p>
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2 items-center">
            <h4 className="text-lg font-bold text-darkblue">{price}</h4>
            {initialPrice && (
              <span className="text-lightslateblue line-through text-sm ">
                {initialPrice}
              </span>
            )}
            {discount && <small className="text-xs">{discount}</small>}
          </div>
          <button className="bg-none outline-none border-none text-blue font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
