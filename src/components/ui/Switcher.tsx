"use client";
import { useState } from "react";

interface ISwitcher {
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  onClick: React.MouseEventHandler;
}

const Switcher = ({ leftIcon, rightIcon, onClick }: ISwitcher) => {
  const [position, setPosition] = useState<boolean>(false);

  return (
    <div
      onClick={(e) => {
        setPosition(!position);
        onClick(e);
      }}
      className={`${
        position ? "bg-primary-800" : "bg-secondary-400  "
      } border-2 border-secondary-400  w-20 rounded-full relative h-8 cursor-pointer `}
    >
      <span
        className={`${
          position
            ? "translate-x-11 bg-secondary-300 scale-[85%]"
            : "translate-x-0 bg-primary-700 "
        } transition-transform duration-300 flex justify-center items-center ease-in-out transform  absolute  rounded-full w-[30px] h-[30px] top-1/2 translate-y-[-50%]  bottom-0`}
      >
        {position ? leftIcon : rightIcon}
      </span>
    </div>
  );
};

export default Switcher;
