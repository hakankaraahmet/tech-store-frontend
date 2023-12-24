"use client";
import { useEffect, useState } from "react";
import Tooltip from "../ui/Tooltip";
import Switcher from "../ui/Switcher";
import { LuLogIn } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { BsBasket3 } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import Link from "next/link";
import SearchBar from "../ui/SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [theme, setTheme] = useState<string>("light");
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);

  //Searching (Dummy data will be changed with the exact data after connection of backend)
  interface SearchResult {
    id: number;
    name: string;
  }

  const dummyData: SearchResult[] = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
  ];

  //Dark Mode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleDarkMode = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      return newTheme;
    });
  };
  return (
    <nav className="mb-8">
      <div className="grid grid-cols-2 lg:flex  justify-between items-center  py-8 px-12 bg-primary-800">
        <div className="order-1 w-fit">
          {" "}
          <Link href={"/"}>
            <h1 className="text-secondary-400 font-bold text-3xl tracking-wider">
              {" "}
              <span className="">Tech </span>{" "}
              <span className="text-tertiary">Store</span>
            </h1>{" "}
          </Link>
        </div>
        <div className="dark:text-white col-span-3 mt-8 lg:mt-0 w-full sm:w-3/4 mx-auto  lg:w-1/3 relative order-3 lg:order-2 ">
          <SearchBar<SearchResult> data={dummyData} SearchResult={dummyData} />
        </div>
        <div className="gap-x-8 order-2 lg:order-3 justify-end lg:justify-center hidden lg:flex">
          <Switcher
            leftIcon={
              <MdNightlightRound className="text-primary-800   text-lg" />
            }
            rightIcon={
              <MdOutlineLightMode className="  text-secondary-400   text-lg" />
            }
            onClick={handleDarkMode}
          />
          <Link href="/">
            <Tooltip message="my basket">
              <BsBasket3 className="text-secondary-400 hover:text-tertiary cursor-pointer  text-3xl" />
            </Tooltip>
          </Link>
          <Link href="/">
            <Tooltip message="my profile">
              <LuUser className="text-secondary-400 hover:text-tertiary cursor-pointer text-3xl" />
            </Tooltip>
          </Link>
          <Link href="/">
            <Tooltip message="logout">
              <LuLogIn className="text-secondary-400 hover:text-tertiary cursor-pointer text-3xl" />
            </Tooltip>
          </Link>
        </div>
        <div className="order-2 flex justify-end lg:hidden ">
          <GiHamburgerMenu
            onClick={() => setSideBarOpen(!isSideBarOpen)}
            className="text-secondary-400 hover:text-tertiary cursor-pointer  text-3xl"
          />
        </div>
      </div>

      <div
        className={` bg-secondary_color opacity-100  z-50  bg-secondary-500 dark:bg-primary-800
          dark:text-secondary-400 text-primary-800  border-y-4 border-r-4 border-primary-800 
          rounded-r-xl   transition-all duration-300  lg:hidden border-2  w-2/3  top-0 bottom-0  fixed ${
            isSideBarOpen ? "translate-x-0 " : "-translate-x-full  "
          } `}
      >
        <Sidebar
          handleDarkMode={handleDarkMode}
          setSideBarOpen={setSideBarOpen}
        />
      </div>
      <div
        onClick={() => setSideBarOpen(false)}
        className={`fixed   right-0 top-0 bottom-0  bg-black transition-all duration-300 opacity-50 ${
          isSideBarOpen ? "w-1/2  " : "w-0  "
        }`}
      ></div>
    </nav>
  );
};

export default Navbar;
