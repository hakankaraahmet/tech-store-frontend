"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Typography from "./Typography";
import { useRouter } from "next/navigation";

interface ISearchBar<T> {
  data: Array<any>;
  SearchResult: any;
}

const SearchBar = <T,>({ data, SearchResult }: ISearchBar<T>) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<(typeof SearchResult)[]>(
    []
  );
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const searchResultRef = useRef<HTMLInputElement>(null);
  const [isInputActive, setIsInputActive] = useState<boolean>(false)
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const results = data.filter((item) =>
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
    e.preventDefault();
    if (selectedIndex !== -1) {
      setSearchTerm(searchResults[selectedIndex].name);
      router.push(`/${searchResults[selectedIndex].name}`);
    } else {
      router.push(`/${searchTerm}`);
    }
  };

  // outside click of input search items
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (searchResultRef.current) {
        if (!searchResultRef.current.contains(event.target) && !isInputActive) {
          searchResultRef.current.style.visibility = "hidden";
        }else{
          searchResultRef.current.style.visibility = "visible";
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchResultRef, isInputActive]);
  return (
    <div>
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
          onFocus={() => setIsInputActive(true)}
          onBlur={() => setIsInputActive(false)}
          required
        />
      </form>
      {searchTerm && (
        <div
          ref={searchResultRef}
          className="absolute flex flex-col gap-y-2 bg-secondary-300 dark:bg-primary-700 dark:border-secondary-300 top-16  border-2 border-primary-700 rounded-md p-2 w-full"
        >
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
  );
};

export default SearchBar;
