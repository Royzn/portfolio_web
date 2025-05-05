import React, { useEffect, useRef, useState } from "react";

export default function SlideElement() {
  const itemList = [
    "express.png",
    "figma.png",
    "laravel.png",
    "mongodb.png",
    "mysql.png",
    "nodejs.png",
    "php.png",
    "python.png",
    "react.png",
    "vuejs.png",
  ];

  const [offset, setOffset] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev - 1;
        if (Math.abs(newOffset) >= trackRef.current.scrollWidth / 2) {
          return 0;
        }
        return newOffset;
      });
    }, 15); // adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-gray-500 py-6 px-4 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-16"
          style={{
            transform: `translateX(${offset}px)`,
            transition: "transform 0.01s linear",
            whiteSpace: "nowrap",
          }}
        >
          {[...itemList, ...itemList].map((x, index) => (
            <img
              className="w-full h-20"
              key={index}
              src={x}
            ></img>
          ))}
        </div>
      </div>
    </>
  );
}
