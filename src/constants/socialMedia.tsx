import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export interface ISocialMedia {
  id: number;
  name: string;
  link: string;
  icon: JSX.Element;
}

export const socialMedia: ISocialMedia[] = [
  {
    id: 0,
    name: "Github",
    link: "https://github.com/hakankaraahmet",
    icon: <FaGithub className="text-xl text-secondary-400 hover:text-tertiary"/>,
  },
  {
    id: 1,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/hakan-karaahmeto%C4%9Flu/",
    icon: <FaLinkedin className="text-xl text-secondary-400 hover:text-tertiary"/>,
  },
  {
    id: 2,
    name: "Send mail to me",
    link: "mailto:karaahmethkn@gmail.com",
    icon: <IoMail className="text-xl text-secondary-400 hover:text-tertiary"/>,
  },
];
