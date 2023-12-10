"use client";
import { useEffect, useState } from "react";
import Tooltip from "../ui/Tooltip";
import Switcher from "../ui/Switcher";
import { LuLogIn } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { BsBasket3 } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleDarkMode = () => {
    setTheme((prevTheme) => {
      console.log("Previous Theme:", prevTheme);
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      console.log("New Theme:", newTheme);
      return newTheme;
    });
  };
  
  console.log(theme)
  return (
    <nav className="border border-red-500  mb-8">
      <div className="flex justify-between border-2 border-black py-12 px-12 bg-primary-800">
        <div className="border-2 border-green-500">
          {" "}
          <h1 className="text-secondary-400 font-bold text-3xl tracking-wider">
            {" "}
            <span className="">Tech </span>{" "}
            <span className="text-tertiary">Store</span>
          </h1>{" "}
        </div>
        <div className="border-2 border-green-500 dark:text-white">middle</div>
        <div className="flex gap-x-8">
          <Switcher
            leftIcon={
              <MdNightlightRound className="text-primary-800  text-lg" />
            }
            rightIcon={
              <MdOutlineLightMode className="  text-secondary-400   text-lg" />
            }
            onClick={handleDarkMode}
          />
          <div className="a">
            <Tooltip message="my basket">
              <BsBasket3 className="text-secondary-400 hover:text-tertiary cursor-pointer  text-3xl" />
            </Tooltip>
          </div>
          <div className="a">
            <Tooltip message="my profile">
              <LuUser className="text-secondary-400 hover:text-tertiary cursor-pointer text-3xl" />
            </Tooltip>
          </div>
          <div className="a">
            <Tooltip message="logout">
              <LuLogIn className="text-secondary-400 hover:text-tertiary cursor-pointer text-3xl" />
            </Tooltip>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
