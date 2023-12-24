import { ISocialMedia, socialMedia } from "@/constants/socialMedia";
import Link from "next/link";
import React from "react";
import Tooltip from "../ui/Tooltip";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-2 border-black text-secondary-800 mt-auto py-2 flex flex-col items-center bg-primary-800">
      <div className="border-b border-secondary-800 w-3/4 flex gap-x-10 justify-center pb-2">
        {socialMedia.map((media: ISocialMedia) => (
          <Tooltip
            message={media.name}
            className={`top-6  flex justify-center ${
              media.id == 2 ? "w-40" : "w-20"
            }`}
          >
            <Link
              target={media.id !== 2 ? "_blank" : ""}
              key={media.id}
              href={media.link}
            >
              {media.icon}
            </Link>
          </Tooltip>
        ))}
      </div>
      <p className="pt-2">Copyright &#169; {currentYear} </p>
    </footer>
  );
};

export default Footer;
