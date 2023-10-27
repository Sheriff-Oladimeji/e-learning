/* eslint-disable react/prop-types */

import Button from "../button/Button";
import {
  FiBarChart,
  FiClock,
  FiRefreshCcw,
  PiGraduationCapLight,
  PiCertificate,
  PiDownloadSimple,
} from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi"
import { LuFileEdit } from "react-icons/lu"
import {AiOutlineFile} from "react-icons/ai"
const Summary = ({ item }) => {
  return (
    <aside className="flex flex-col gap-10 ">
      <div className="border border-[#E6E7E9] rounded-md pb-8">
        <div className="bg-[#E6EFFE] rounded-t-md flex flex-col gap-6 items-center p-4">
          <p className="text-lg text-[#0751CB]">One Time Payment</p>
          <div className="flex items-center gap-3 text-lightgrey">
            <h3 className="text-2xl font-bold text-midnightBlue">
              {item.price.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </h3>
            <p className=" line-through">
              {item.initialPrice.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
            <small>{item.discount}% off</small>
          </div>
          <button className="p-2 rounded-xl px-6 bg-transparent border border-[#B1B5BB] text-center font-semibold  w-full text-darkslateblue ">
            Add to Cart
          </button>
          <Button url="/checkout" width="w-full" value="Enroll Now" />
          <small className="text-lightgrey">A month money back guarantee</small>
        </div>

        <div className="flex-col gap-4 p-4"></div>
      </div>
      <div className="border border-[#E6E7E9] rounded-md"></div>
    </aside>
  );
};

export default Summary;
