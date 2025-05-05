import React from "react";

function EndSection() {
  return (
    <>
      <div className="relative w-full h-56">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('teamworkbg.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-customBlack opacity-75 z-10"></div>

        <div className="relative z-20 text-customWhite p-10">
          <h1 className="text-4xl font-bold text-center">
            Want to know about me?
          </h1>
          <div className="flex justify-center items-center gap-3 mt-4">
            <a
              className="px-3 py-1 rounded-xl transition-all duration-500"
              href="https://www.linkedin.com/in/royzenanggatama/"
            >
              <img className="w-16" src="linkedin.png" alt="" />
            </a>
            <a
              className="px-3 py-1 rounded-xl transition-all duration-500"
              href="https://www.instagram.com/royz.a/"
            >
              <img className="w-14" src="instagram.png" alt="" />
            </a>
            <a href="mailto:royzenanggatama@gmail.com">
              <img className="w-16" src="mail.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default EndSection;
