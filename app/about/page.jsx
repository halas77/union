import Image from "next/image";
import React from "react";

const About2 = () => {
  return (
    <div className="mt-20 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:w-10/12 w-full">
        <p className="font-normal text-sm leading-3 text-red-700 hover:text-red-800 cursor-pointer">
          About
        </p>
        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          totam!
        </h2>
        <p className="font-normal text-base leading-6 text-gray-600 mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          temporibus possimus tempore a et quis minus, voluptatem odio nesciunt
          ut. Optio, maiores magni. Officiis cumque, ad voluptatibus et
          cupiditate, nemo maxime voluptate mollitia aut odio tenetur neque
          incidunt ratione, soluta in voluptatem ab provident! Facilis incidunt
          nam deserunt laudantium accusantium!
        </p>
      </div>

      <div className=" flex lg:mt-14 sm:mt-10 mt-12 gap-10">
        <Image
          className="lg:block hidden"
          width={600}
          height={100}
          src="/bg4.jpg"
          alt="Group of people Chilling"
        />

        <Image
          className="lg:block hidden"
          width={600}
          height={100}
          src="/bg2.jpg"
          alt="Group of people Chilling"
        />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Our Story
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            consequuntur dolores corrupti doloribus ipsa, magnam distinctio non
            quisquam tenetur, deleniti totam porro soluta. Cupiditate vel
            voluptate voluptas molestias aliquid unde, eveniet blanditiis eius,
            incidunt voluptatibus esse repudiandae quibusdam natus explicabo
            earum. Eveniet, dolorum quaerat veritatis quam deleniti facere? Ipsa
            ad neque ipsam unde, eveniet architecto cum ratione fugiat nulla
            deserunt!
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            consequuntur dolores corrupti doloribus ipsa, magnam distinctio non
            quisquam tenetur, deleniti totam porro soluta. Cupiditate vel
            voluptate voluptas molestias aliquid unde, eveniet blanditiis eius,
            incidunt voluptatibus esse repudiandae quibusdam natus explicabo
            earum. Eveniet, dolorum quaerat veritatis quam deleniti facere? Ipsa
            ad neque ipsam unde, eveniet architecto cum ratione fugiat nulla
            deserunt!
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <Image
            className="lg:block hidden"
            width={600}
            height={100}
            src="/bg1.jpg"
            alt="Group of people Chilling"
          />
        </div>
      </div>
    </div>
  );
};

export default About2;
