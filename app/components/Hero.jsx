"use client";

import Image from "next/image";
import React, { useState } from "react";
function IndexPage() {
  return (
      <div className="lg:px-6 xl:px-0 w-full h-[650px] flex justify-center items-center pt-24">
        <div className="mx-auto container relative z-0 px-4 xl:px-0">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="md:w-3/5 md:pt-24 pb-10 py-10">
              <h1 className="text-3xl lg:text-6xl xl:text-6xl font-black text-gray-900 text-center md:text-left md:w-8/12 ">
                <span className="text-red-800">Inspiring</span> Minds Shaping{" "}
                <span className="text-red-800">Futures</span>{" "}
              </h1>
              <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-500 text-md lg:text-lg">
                An academy dedicated to holistic education, fostering
                innovation, nurturing talents, and cultivating a vibrant
                learning community for future leaders.
              </h2>
              <div className="w-full flex justify-center md:block">
                <button className="hover:opacity-90 border border-red-800 py-3 px-8 lg:py-5 lg:px-20 font-bold rounded-full text-red-800 text-sm md:text-lg">
                  Join Us
                </button>
              </div>
            </div>
            <div className="w-5/12  m-auto flex items-center justify-center overflow-hidden">
              <Image
                width={500}
                height={100}
                className="md:absolute -ml-20"
                src="/hero.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default IndexPage;
