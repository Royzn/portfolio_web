import React from "react";
import { useState, useEffect } from "react";

export default function GalleryHeader() {
  return (
    <>
      <div className="hidden md:grid grid-rows-2 grid-cols-2 lgx:grid-cols-3 gap-1 md:w-xl h-fit">
        <div className="col-span-1 row-span-1 lgx:row-span-2 h-fit rounded-xl hover:transform hover:scale-110 duration-500 overflow-hidden">
          <img className="" src="/potrait.JPG" alt="" />
        </div>
        <div className="flex flex-col relative bg-white text-center justify-center items-center py-3 px-3 col-span-1 lgx:col-span-2 row-span-1 rounded-xl hover:transform hover:scale-110 duration-500 overflow-hidden">
          <h1 className="font-bold select-none z-10 text-sm lgx:text-xl">Royzen Anggatama</h1>
          <p className="opacity-50 select-none z-10 text-sm lgx:text-xl">Jakarta, Indonesia</p>
          <span className="absolute -bottom-7 -left-7 bg-purple-300 w-30 h-30 rounded-full opacity-50"></span>
          <span className="absolute -top-3 -right-3 bg-purple-300 w-10 h-10 rounded-full opacity-50"></span>
        </div>
        <a
          className="flex flex-col lgx:flex-row select-none text-center lgx:text-start text-[12px] lgx:text-sm font-semibold bg-white justify-center gap-2 items-center row-span-1 col-span-1 hover:transform rounded-xl hover:scale-110 duration-500"
          target="_blank"
          href="https://www.linkedin.com/in/royzenanggatama/"
        >
          <img className="w-10 h-10" src="/linkedin.png" alt="" />
          <div>
            <p>Linked In</p>
            <p>royzenanggatama</p>
          </div>
        </a>
        <a
          className="flex flex-col lgx:flex-row select-none text-center lgx:text-start text-[12px] lgx:text-sm font-semibold bg-white justify-center gap-2 items-center row-span-1 col-span-1 hover:transform rounded-xl hover:scale-110 duration-500"
          target="_blank"
          href="https://www.instagram.com/royz.a/"
        >
          <img className="w-10 h-10" src="/instagram.png" alt="" />
          <div>
            <p>Instagram</p>
            <p>@royz.a</p>
          </div>
        </a>
      </div>
    </>
  );
}
