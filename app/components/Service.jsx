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
    <div className="w-full text-black bg-gray-50 py-10 rounded-ss-full rounded-ee-full">
      <div className="mx-6 md:mx:18 lg:mx-28 py-5">
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
