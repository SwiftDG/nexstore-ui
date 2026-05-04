import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { ChevronDown } from "lucide-react";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

export default function Navbar() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark"),
  );
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white  duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto px-4 sm:px-12 flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 dark:text-white"
            >
              <img className="w-10" src={Logo} alt="Logo" />
              NexStore
            </a>
          </div>
          {/* searchbar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="bg-white dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 dark:border-gray-600 px-2 py-1 focus:outline-none focus:border-primary"
              />
              <Search className="text-gray-500 cursor-pointer group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5" />
            </div>
            {/* Order button */}
            <button
              className="bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-200 text-white py-1 px-4 flex items-center gap-3 group"
              onClick={() => alert("Ordering not yet available")}
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <ShoppingCart
                className="cursor-pointer drop-shadow-sm"
                fill="white"
              />
            </button>
            {/* Darkmode Switch */}
            <button onClick={toggleDark}>
              {dark ? (
                <Sun className="text-yellow-500 w-6 h-6" />
              ) : (
                <Moon className="text-gray-500 w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                className="inline-block px-4 hover:text-primary transition-all duration-200"
                href={data.link}
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="relative group">
            <a
              className="flex items-center gap-[2px] py-2 cursor-pointer"
              href="#"
            >
              Trending Products
              <ChevronDown className="w-5 h-5 transition-all duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute z-[9999] hidden group-hover:block bg-white dark:bg-gray-900 shadow-md p-2 rounded-md w-[200px] my-0.5">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full px-2 py-1 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
