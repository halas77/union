"use client";

import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { galary_data } from "@/constants";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Index() {
  return (
    <div className="container mx-auto py-10">
      <div className="md:flex items-center justify-center w-full h-full py-10 sm:py-8 px-1">
        <div className="flex flex-col justify-start items-start md:w-5/12">
          <h1 className="font-sans text-xl lg:text-3xl mb-3">
            Explore Our Gallary
          </h1>
          <p className="text-slate-700 max-w-xl pb-5 text-sm lg:text-md lg:mr-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            ducimus molestias distinctio quis voluptatem enim, dolores, iusto
            impedit esse ipsum officiis aperiam obcaecati ad magni dolor nostrum
            pariatur laborum iure architecto aliquid vitae, odio sequi. Minus
            deserunt hic quisquam assumenda?
          </p>
          <button className="flex justify-center items-center gap-1 text-red-800 hover:text-red-600 mb-10">
            Show More <span><HiArrowLongRight size={23}/></span>
          </button>
        </div>
        <CarouselProvider
          className="flex md:w-7/12"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={3}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-2 md:ml-4 bg-white/80 hover:bg-white/50 p-1 rounded-full"
              id="prev"
            >
              <i>
                <IoIosArrowBack size={21} className="text-slate-950" />
              </i>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex gap-2 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  {galary_data.map((item) => (
                    <Slide key={item.id} index={item.id}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="object-cover object-center w-[400px] h-[400px]"
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
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-2 md:mr-4 bg-white/80 hover:bg-white/50 p-1 rounded-full"
              id="next"
            >
              <i>
                <IoIosArrowForward size={21} className="text-slate-950" />
              </i>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
