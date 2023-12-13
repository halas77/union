"use client";

import Image from "next/image";
import { FaBookOpen } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { MdPeople } from "react-icons/md";
import { IoDesktop } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { IoMdGlobe } from "react-icons/io";
import { service_data } from "@/constants";


const icons = {
  FaBookOpen,
  GiSoccerBall,
  MdPeople,
  IoDesktop,
  BiSupport,
  IoMdGlobe,
};


const Services = () => {
  return (
    <div className="w-full text-black bg-gray-50 mt-4">
      <div className="mx-6 md:mx:18 lg:mx-28 py-5">
        <h1 className="font font-sans text-xl lg:text-3xl mb-3 flex justify-center mx-auto">
        Our Key Features
        </h1>
        <p className="text-slate-700 max-w-2xl pb-5 flex justify-center mx-auto text-center text-sm lg:text-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          ducimus molestias distinctio quis voluptatem enim, dolores, iusto
          impedit esse ipsum officiis aperiam obcaecati ad magni dolor nostrum
          pariatur laborum iure architecto aliquid vitae, odio sequi. Minus
          deserunt hic quisquam assumenda?
        </p>
        <div className="">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {service_data.map((item) => {
              const Icon = icons[item.icon]; // Dynamically select the icon component
              return (
                <div
                  key={item.title}
                  className="bg-gray-50 border rounded-2xl border-gray-200 p-4 py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300"
                >
                  <div className="mx-auto bg-red-800 p-5 text-white rounded-full">
                    <Icon className="w-10 h-10"/> {/* Render the icon dynamically */}
                  </div>
                  <h2 className="font-bold text-slate-900 text-xl py-5">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-[13px]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
