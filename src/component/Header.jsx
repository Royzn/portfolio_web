import React from "react";
import { useState } from "react";

function HamburgerMenu({ onToggle, open }) {
  const handleToggle = () => {
    onToggle(!open);
  };

  return (
    <div
      className="md:hidden w-7 h-7 flex flex-col justify-between items-center cursor-pointer"
      onClick={handleToggle}
    >
      <span
        className={`block rounded-full h-1 w-full transform transition duration-300 ease-in-out ${
          open ? "rotate-45 translate-y-3.5 bg-customWhite" : "bg-customBlack"
        }`}
      ></span>
      <span
        className={`block rounded-full h-1 w-full bg-customBlack transition-all duration-300 ease-in-out ${
          open ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block rounded-full h-1 w-full  transform transition duration-300 ease-in-out ${
          open ? "-rotate-45 -translate-y-2.5 bg-customWhite" : "bg-customBlack"
        }`}
      ></span>
    </div>
  );
}

function Header({ onToggle, open }) {
  const handleToggle = () => {
    onToggle(!open);
  };

  return (
    <>
      <div className="flex mt-4 mx-4 items-center p-4 justify-between text-lg rounded-xl">
        <h1
          className={
            `text-xl font-bold cursor-pointer ` +
            (open ? "text-customWhite" : "")
          }
          onClick={() => window.scrollTo(0, 0)}
        >
          Royzen Anggatama
        </h1>

        <HamburgerMenu onToggle={handleToggle} open={open} />
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="hover:bg-customBlack hover:text-white px-3 py-1 rounded-xl transition-all duration-500"
            href="#about-me"
          >
            About Me
          </a>
          <a
            className="hover:bg-customBlack hover:text-white px-3 py-1 rounded-xl transition-all duration-500"
            href="#projects"
          >
            Project
          </a>
          <a
            href="/doc/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-customBlack text-customWhite px-4 py-2 rounded-lg hover:bg-customWhite hover:text-customBlack transition-all duration-500"
          >
            View Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
