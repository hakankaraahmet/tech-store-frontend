"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Tooltip from "../ui/Tooltip";
import Switcher from "../ui/Switcher";
import { LuLogIn } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { BsBasket3 } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Typography from "../ui/Typography";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [theme, setTheme] = useState<string>("light");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

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

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const results = dummyData.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
    setSelectedIndex(-1);
  };

  //Moving in Search results
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && selectedIndex < searchResults.length - 1) {
      setSelectedIndex((prevIndex) => prevIndex + 1);
    } else if (e.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex((prevIndex) => prevIndex - 1);
    }
  };

  //Submitting Search
  const handleSubmit = (e: React.FormEvent) => {
    if (selectedIndex === -1) {
      e.preventDefault();
      router.push(`/${searchTerm}`);
      setSearchTerm(searchTerm);
    }
  };

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
      console.log("Previous Theme:", prevTheme);
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      console.log("New Theme:", newTheme);
      return newTheme;
    });
  };

  return (
    <nav className="border border-red-500  mb-8">
      <div className="flex justify-between items-center border-2 border-black py-8 px-12 bg-primary-800">
        <div>
          {" "}
          <Link href={"/"}>
            <h1 className="text-secondary-400 font-bold text-3xl tracking-wider">
              {" "}
              <span className="">Tech </span>{" "}
              <span className="text-tertiary">Store</span>
            </h1>{" "}
          </Link>
        </div>
        <div className="dark:text-white w-1/3 relative ">
          <form className="relative" onSubmit={handleSubmit}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoSearch className="text-primary-800  text-2xl" />
            </div>
            <input
              type="search"
              className="block w-full  py-4  ps-10 pe-6 text-sm text-primary-800  rounded-full focus:outline-none"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              required
            />
          </form>
          {searchTerm && (
            <div className="absolute flex flex-col gap-y-2 bg-secondary-300 dark:bg-primary-700 dark:border-secondary-300 top-16  border-2 border-primary-700 rounded-md p-2 w-full">
              <Typography as="h3">
                Search Results of{" "}
                <span className="font-bold dark:font-bold">"{searchTerm}"</span>
              </Typography>
              {searchResults.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => {
                    setSearchTerm(result.name);
                    router.push(`/${result.name}`);
                  }}
                  className={`cursor-pointer text-left ps-2 p-2 text-primary-800 dark:text-secondary-400 ${
                    index === selectedIndex
                      ? "bg-primary-500 rounded-2xl text-secondary-400 "
                      : ""
                  }`}
                >
                  {result.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-x-8">
          <Switcher
            leftIcon={
              <MdNightlightRound className="text-primary-800   text-lg" />
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
