import Link from "next/link";
import React from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#000300] w-full mx-auto py-5 px-6 lg:px-16 grid lg:grid-cols-3 gap-4 text-gray-400">
        <div>
          <h1 className="w-full text-3xl font-bold text-slate-50">
            Union Acadamy
          </h1>
          <p className="py-4 text-sm font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit
            accusantium labore, perferendis alias, natus deserunt ab et rerum
            voluptas accusamus debitis in esse laboriosam asperiores. Doloribus
            ipsum esse corrupti dignissimos quas deleniti aut, culpa eos at
            pariatur, veritatis nisi!
          </p>
          <div className="flex justify-between mx-auto md:w-[80%] my-6">
            <Link href="">
              <FaFacebook
                size={26}
                className="text-gray-400 hover:text-gray-100"
              />
            </Link>
            <Link href="">
              <FaInstagram
                size={26}
                className="text-gray-400 hover:text-gray-100"
              />
            </Link>
            <Link href="">
              <FaTelegram
                size={26}
                className="text-gray-400 hover:text-gray-100"
              />
            </Link>
            <Link href="">
              <FaTiktok
                size={26}
                className="text-gray-400 hover:text-gray-100"
              />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between lg:px-44 mt-6">
          <div>
            <h6 className="font-semibold text-gray-200">Company</h6>
            <ul className="flex flex-col">
              <Link href="/about" className="py-2 text-sm hover:text-gray-200">
                About
              </Link>
              <Link
                href="/projects"
                className="py-2 text-sm hover:text-gray-200"
              >
                Gallary
              </Link>
              <Link
                href="/services"
                className="py-2 text-sm hover:text-gray-200"
              >
                About us
              </Link>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-gray-200">Contact</h6>
            <ul>
              <li className="py-2 text-sm">
                Call Us: +251-922-00000 / +251912500000{" "}
              </li>
              <li className="py-2 text-sm">
                Email Us: info@unionacadamy.com
              </li>
              <li className="py-2 text-sm">
                Address: Hawassa, Ethiopia
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#000300] w-full flex justify-center items-center mx-auto pb-2">
        <p className="text-gray-50 mx-auto">
          Union Acadamy 2023 | All rights reserved &copy;
        </p>
      </div>
    </div>
  );
};

export default Footer;
