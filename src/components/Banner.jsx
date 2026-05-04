import React from "react";
import BannerImg from "../assets/women2.jpg";
import { Shield, Zap, Truck, Tag } from "lucide-react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
          >
            <img
              src={BannerImg}
              alt="Banner"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </motion.div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 items-center sm:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: false }}
              className="text-3xl sm:text-4xl font-bold "
            >
              Winter Sale up to 50% Off
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-sm text-gray-500 tracking-wide leading-5 text-center"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </motion.p>
            <div className="flex flex-col gap-4 w-full">
              {[
                {
                  icon: <Shield className="text-violet-500 w-6 h-6" />,
                  bg: "bg-violet-100 dark:bg-violet-400",
                  label: "Quality Products",
                  delay: 0.2,
                },
                {
                  icon: <Zap className="text-orange-500 w-6 h-6" />,
                  bg: "bg-orange-100 dark:bg-orange-400",
                  label: "Fast Delivery",
                  delay: 0.3,
                },
                {
                  icon: <Truck className="text-green-500 w-6 h-6" />,
                  bg: "bg-green-100 dark:bg-green-400",
                  label: "Easy Payment method",
                  delay: 0.4,
                },
                {
                  icon: <Tag className="text-yellow-500 w-6 h-6" />,
                  bg: "bg-yellow-100 dark:bg-yellow-400",
                  label: "Get Offers",
                  delay: 0.5,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: item.delay }}
                  viewport={{ once: false }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`h-12 w-12 shadow-sm p-4 rounded-full flex items-center justify-center ${item.bg}`}
                  >
                    {item.icon}
                  </div>
                  <p>{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
