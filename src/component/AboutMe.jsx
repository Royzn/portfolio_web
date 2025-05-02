import React from "react";

function Card({ icon, title, description }) {
  return (
    <>
      <div className="min-h-64 min-w-56 py-4 px-4 bg-white rounded-xl">
        <div className="flex items-center">
          <img className="w-20 h-20" src={"/icon/" + icon} alt="" />
          <h2 className="font-bold text-2xl">{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
}

export default function AboutMe() {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold text-center">Who Am I?</h1>
      <div className="mx-14 flex flex-col md:flex-row gap-10 justify-between mt-20">
        <Card
          icon="graduate.jpg"
          title="Fresh Graduate"
          description="A recent graduate in Computer Science from Bina Nusantara University, eager to kickstart my career and grow professionally."
        />
        <Card
          icon="developer.jpg"
          title="Developer"
          description="Passionate about building user-friendly web and mobile applications with modern technologies and clean code."
        />
        <Card
          icon="learning.jpg"
          title="Never Stop Learning"
          description="Driven by curiosity and growth, I constantly seek new knowledge to stay ahead in the fast-evolving tech world."
        />
      </div>
    </>
  );
}
