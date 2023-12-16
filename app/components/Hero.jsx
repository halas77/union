"use client";
import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { hero_data } from "@/constants";

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
              An academy dedicated to holistic education, fostering innovation,
              nurturing talents, and cultivating a vibrant learning community
              for future leaders.
            </h2>
            <div className="w-full flex justify-center md:block">
              <button className="hover:opacity-90 border border-red-800 py-3 px-8 lg:py-5 lg:px-20 font-bold rounded-full text-red-800 text-sm md:text-lg">
                Join Us
              </button>
            </div>
          </div>
          <div className="hidden lg:flex h-[470px] w-[570px] absolute right-[-14px] top-0 z-0 bg-gray-50 rounded-3xl"></div>
          <div className=" lg:w-5/12 m-auto flex items-center justify-center overflow-hidden z-30">
            <CarouselProvider
              className="flex"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={4}
              visibleSlides={2}
              step={1}
              infinite={true}
              isPlaying={true}
              interval={3000}
            >
              <div className="w-full relative flex items-center justify-center">
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden rounded-2xl">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex gap-2 md:gap-6 items-center justify-start transition ease-out duration-700"
                    >
                      {hero_data.map((item) => (
                        <Slide key={item.id} index={item.id}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="object-cover object-center w-[400px] h-[200px] md:w-[400px] md:h-[400px] rounded-2xl"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-2 md:p-6">
                              <div className="flex h-full items-end">
                                <h3 className="text-md md:text-lg font-semibold text-white">
                                  {item.title}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      ))}
                    </div>
                  </Slider>
                </div>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
