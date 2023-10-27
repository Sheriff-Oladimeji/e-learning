/* eslint-disable react/prop-types */

import Button from "../button/Button";
import { FiBarChart, FiClock, FiRefreshCcw } from "react-icons/fi";
import {
  PiGraduationCapLight,
  PiCertificate,
  PiDownloadSimple,
} from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { LuFileEdit } from "react-icons/lu";
import { AiOutlineFile } from "react-icons/ai";

const data = {
  value: [
    {
      id: 1,
      icon: <FiBarChart />,
      text: "Beginners - Expert",
    },

    {
      id: 2,
      icon: <FiClock />,
      text: "3 hours 30 minutes duration",
    },
    {
      id: 3,
      icon: <FiRefreshCcw />,
      text: "10 January 2023 last updated",
    },
    {
      id: 4,
      icon: <PiGraduationCapLight />,
      text: "10,927 student enrolled",
    },
    {
      id: 5,
      icon: <PiCertificate />,
      text: "Certificate",
    },
  ],
  materials: [
    {
      id: 1,
      icon: <BiMoviePlay size={30} />,
      text: "13 hours  and 18 videos of high-quality video lectures",
    },

    {
      id: 2,
      icon: <PiDownloadSimple size={23} />,
      text: "Downloadable resources",
    },
    {
      id: 3,
      icon: <LuFileEdit size={23} />,
      text: "Interactive exercises and projects",
    },
    {
      id: 4,
      icon: <AiOutlineFile size={23} />,
      text: "Interactive exercises and projects",
    },
  ],
};
const Summary = ({ item }) => {
  return (
    <aside className="flex flex-col gap-10 ">
      <div className="border border-[#E6E7E9] rounded-lg ">
        <div className="bg-[#E6EFFE] rounded-t-lg flex flex-col gap-6 items-center p-4">
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

        <div className="flex flex-col gap-6 p-8">
          {data.value.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 text-lightslateblue"
            >
              {item.icon} <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-[#E6E7E9] rounded-lg py-6">
        <div className="flex flex-col ">
          <h2 className="font-bold text-darkslateblue text-xl px-8">
            Material Includes
          </h2>
          <div className="flex flex-col gap-6 p-8">
            {data.materials.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 text-lightslateblue "
              >
                {item.icon} <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col ">
            <h2 className="font-bold text-darkslateblue text-xl px-8">
              Requirements
            </h2>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Summary;
