"use client"

import React from 'react'
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
  } from "pure-react-carousel";
  import "pure-react-carousel/dist/react-carousel.es.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { galary_data } from '@/constants';


const page = () => {
  return (
    <div className='mt-20 py-20 px-4 md:px-10 lg:px-20 flex flex-col gap-5 lg:gap-10'>
         <CarouselProvider
          className="mx-auto"
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
        <CarouselProvider
          className="mx-auto"
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
  )
}

export default page