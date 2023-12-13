"use client";
import Image from "next/image";
import { galary_data, gallary, news, news_data } from "@/constants";
import Link from "next/link";

const News = () => {
  return (
    <div className="w-full text-slate-900 bg-gray-100">
      <div className="mx-4 md:mx:18 lg:mx-24 py-8">
        <h1 className="text-2xl font-sans text-slate-950 mb-5">
          Latest <span className="px-3 text-white bg-red-800">News</span>
        </h1>
        <div className="">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {news_data.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 shadow-xl my-4 pb-2 flex flex-col mx-auto text-center hover:bg-gray-100 ease-in-out duration-300"
              >
                <Image
                  src={item.img}
                  width={450}
                  height={30}
                  alt="Project Image"
                  className="mx-auto md:h-[250px]"
                />
                <h2 className="font-bold font-sans text-gray-900 text-xl py-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 font-sans text-sm px-2">
                  {item.desc}
                </p>
                <button className="my-5 flex justify-center items-center mx-auto border bg-red-800 hover:bg-orange-800 text-slate-50 duration-300 ease-in-out rounded-lg px-4 py-2 text-sm">
                  <Link href="/news">Read more</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
