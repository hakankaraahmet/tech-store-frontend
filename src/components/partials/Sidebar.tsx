import Link from "next/link";
import React from "react";
import Switcher from "../ui/Switcher";
import { MdNightlightRound, MdOutlineLightMode } from "react-icons/md";
import { BsBasket3 } from "react-icons/bs";
import { LuLogIn, LuUser } from "react-icons/lu";
import Typography from "../ui/Typography";

interface ISideBar {
  isSideBarOpen: boolean;
  setSideBarOpen: (value: boolean) => void;
  handleDarkMode: () => void;
}

const Sidebar = ({
  isSideBarOpen,
  setSideBarOpen,
  handleDarkMode,
}: ISideBar) => {
  return (
      <div className=" flex flex-col pt-8 w-full px-4 h-full">
        <Link
          onClick={() => setSideBarOpen(false)}
          href={"/"}
          className="w-fit"
        >
          <h1 className="font-bold text-3xl tracking-wider ">
            {" "}
            <span className=" ">Tech </span>{" "}
            <span className="text-tertiary">Store</span>
          </h1>{" "}
        </Link>
        <div className=" mt-8 grid ">
          <Link
            onClick={() => setSideBarOpen(false)}
            href={"/"}
            className="flex cursor-pointer items-center w-fit"
          >
            <BsBasket3 className="  cursor-pointer  text-3xl" />
            <Typography as="span" className="ml-2">
              My Basket
            </Typography>
          </Link>
          <Link
            onClick={() => setSideBarOpen(false)}
            href={"/"}
            className="flex cursor-pointer items-center mt-8 w-fit"
          >
            <LuUser className="  cursor-pointer text-3xl" />{" "}
            <Typography as="span" className="ml-2">
              My Profile
            </Typography>
          </Link>
        </div>
        <div className=" mb-8 flex-1 mt-auto flex items-end justify-between">
          <Link
            onClick={() => setSideBarOpen(false)}
            href={"/"}
            className="flex cursor-pointer items-center"
          >
            <LuLogIn className="  cursor-pointer text-3xl" />{" "}
            <Typography as="span" className="ml-2">
              Logout
            </Typography>
          </Link>
          <div className="border-2 border-primary-800 dark:border-none rounded-full">
            <Switcher
              leftIcon={
                <MdNightlightRound className="text-primary-800   text-lg" />
              }
              rightIcon={
                <MdOutlineLightMode className="  text-secondary-400   text-lg" />
              }
              onClick={handleDarkMode}
            />
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
