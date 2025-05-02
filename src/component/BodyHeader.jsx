import React from "react";
import { useState, useEffect, useRef } from "react";
import GalleryHeader from "./GalleryHeader";

export default function BodyHeader() {
  const [displayText, setDisplayText] = useState("");
  const textList = useRef([
    "Software Engineer",
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
  ]);

  const index = useRef(0);
  const charAt = useRef(0);
  const isDeleting = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function type() {
      const currentText = textList.current[index.current];
      let updatedText;

      if (!isDeleting.current) {
        updatedText = currentText.slice(0, charAt.current + 1);
        charAt.current++;
      } else {
        updatedText = currentText.slice(0, charAt.current - 1);
        charAt.current--;
      }

      setDisplayText(updatedText);

      if (!isDeleting.current && charAt.current === currentText.length) {
        isDeleting.current = true;
        timeoutRef.current = setTimeout(type, 1000); // pause before deleting
        return;
      }

      if (isDeleting.current && charAt.current === 0) {
        isDeleting.current = false;
        index.current = (index.current + 1) % textList.current.length;
      }

      const delay = isDeleting.current
        ? 50 + Math.random() * 50
        : 100 + Math.random() * 100;

      timeoutRef.current = setTimeout(type, delay);
    }

    timeoutRef.current = setTimeout(type, 1500);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col gap-20 md:flex-row md:gap-0 justify-evenly my-36 mx-20">
      <div className="flex flex-col gap-3 max-w-lg">
        <div className="flex items-center justify-center gap-2 bg-green-200 px-2 py-1 rounded-lg w-fit">
          <span className="w-2 h-2 md:w-3 md:h-3 bg-green-600 inline-block rounded-full animate-pulse"></span>
          <p className="text-green-800 font-bold">Open to Work</p>
        </div>
        <h1 className="text-xl md:text-5xl font-bold">Hi, I'm a</h1>
        <div className="flex items-center">
          <h1 className="text-xl md:text-5xl select-none font-bold text-gray-700">{displayText}</h1>
          <span className="w-0.5 md:w-1 h-8 md:h-14 bg-gray-600 inline-block rounded-full animate-blink"></span>
        </div>
        <p className="text-gray-400 mt-6 text-sm md:text-lg">
          Passionate about software development and problem-solving. Experienced
          in JavaScript, React, and etc. Seeking opportunities to apply my
          skills and contribute to innovative projects.
        </p>
      </div>
      <GalleryHeader />
    </div>
  );
}
