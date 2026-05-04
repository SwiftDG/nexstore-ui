import { useState } from "react";
import Img1 from "../assets/women.png";
import Img2 from "../assets/women2.jpg";
import Img3 from "../assets/women3.jpg";
import Img4 from "../assets/women4.jpg";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

export default function Products() {
  const [rating, setRating] = useState({});
  function handleClick(id) {
    setRating({ ...rating, [id]: !rating[id] });
  }
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top selling products</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit vitae.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <motion.div
                key={data.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: data.aosDelay / 1000 }}
                viewport={{ once: true }}
              >
                <img
                  className="h-[220px] w-[150px] rounded-md object-cover"
                  src={data.img}
                  alt={data.title}
                />
                <h3 className="font-semibold">{data.title} </h3>
                <p className="text-sm text-gray-600">{data.color} </p>
                <div
                  className="flex items-center gap-1"
                  onClick={() => handleClick(data.id)}
                >
                  {rating[data.id] ? (
                    <Star className="text-yellow-500" fill="#EAB308" />
                  ) : (
                    <Star className="text-yellow-500" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
