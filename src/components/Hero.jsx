import React from "react";
import Image1 from "../assets/women.png";
import Image2 from "../assets/shopping.png";
import Image3 from "../assets/sale.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Shop the latest styles at unbeatable prices. Quality fashion delivered to your doorstep across Nigeria.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Discover trending collections curated just for you. Fast delivery, secure checkout, and easy returns.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "Limited time deals across all categories. Don't miss out, shop now and save big on NexStore.",
  },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="w-[700px] h-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-0"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {ImageList.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                {/* text container */}
                <div className="flex flex-col justify-center text-center sm:text-left order-2 relative z-10 sm:order-1 gap-4 pt-12 sm:pt-0 ml-10">
                  <h1 className="text-4xl sm:text-6xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full w-fit">
                    Order Now
                  </button>
                </div>
                {/* image container */}
                <div className="order-1 sm:order-2">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1.05 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false }}
                    src={item.img}
                    alt={item.title}
                    className="w-[300px] h-[300px] object-contain sm:w-[450px] sm:h-[450px] mx-auto sm:scale-125 relative z-10"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
