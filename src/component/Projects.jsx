import React from "react";

function ProjectCard({ url, name, desc, role }) {
  return (
    <>
      <div className="flex flex-col justify-between gap-3 bg-white rounded-2xl overflow-hidden pb-4 h-full shadow-2xl hover:-translate-y-3 duration-300">
        <div className="flex flex-col gap-4">
          <div className="w-full h-56 overflow-hidden">
            <img src={"project/" + url} alt="" className="" />
          </div>
          <div className="mx-5">
            <h1 className="text-2xl font-bold text-center">{name}</h1>
            <ul className="list-disc list-inside text-customBlack opacity-70 text-sm mt-2 space-y-1">
              {desc.map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
        <span className="font-bold text-sm mx-5 w-fit py-1 px-2 bg-customBlack text-customWhite rounded-lg text-center">
          {role}
        </span>
      </div>
    </>
  );
}

function Projects() {
  const projectList = [
    {
      url: "trip.png",
      name: "TripNusantara",
      desc: [
        "Working with React Native and Firebase to develop the app ",
        "Teamwork with 2 teammates to design and implement the design into code",
        "Use Expo and Expo Go to debug the app",
      ],
      role: "Mobile Developer",
    },
    {
      url: "dashboard.png",
      name: "Project Dashboard",
      desc: [
        "Working with VueJS and ExpressJS to develop the app",
        "Implement AG Grid Library for VueJS to handle table view",
        "Used by technical writer to follow up project based on data shown in the app",
      ],
      role: "Fullstack Developer",
    },
    {
      url: "cti.png",
      name: "Cyber Threat Intelligence",
      desc: [
        "Working with HTML, CSS, and Javascript to develop the app",
        "Teamwork with 2 teammates to integrate the API and manage respons ",
        "Implement ExpressJS as backend layer to handle database data and maintain API ",
        "Used by analyst teams as a tool to obtain necessary datas for ticket",
      ],
      role: "Fullstack Developer",
    },
    {
      url: "mnt.png",
      name: "M&T",
      desc: [
        "Used 8 golden rules to design the web page to achieve the efficiency of each page.",
        "Actively lead the team of 2 to allocate each job desk and set the Gantt chart via notion.",
        "Used HTML, CSS, and Javascript to code the website and got an excellent score of 95/100.",
      ],
      role: "Frontend Developer",
    },
    {
      url: "furnid.png",
      name: "FurnID",
      desc: [
        "Inspired by IKEA website for user to find furniture.",
        "Used HTML and CSS to code the website and got an excellent score",
      ],
      role: "Frontend Developer",
    },
    {
      url: "borobudur.png",
      name: "Borobudur Tour",
      desc: [
        "An application that focuses on helping tourists to get know more about Borobudur temple",
        "A concept made with Figma and planning to bring this concept comes to life.",
        "Understanding 8 golden rules method to achieve the efficiency of each page.",
      ],
      role: "UI/UX Designer",
    },
    {
      url: "soldcarid.png",
      name: "SoldCarID",
      desc: [
        "Used 8 golden rules to design the web page to achieve the efficiency of each page.",
        "Actively lead the team of 3 to allocate each job desk and set the Gantt chart via notion.",
        "Implement MVC to create an Object-Oriented system for the view to database.",
        "Used ASP.NET via Visual Studio to code the website and got an excellent score of 93/100.",
      ],
      role: "Frontend Developer",
    },
  ];
  return (
    <>
      <div className="mx-16">
        <h1 className="text-5xl font-bold text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {projectList.map((x, index) => (
            <ProjectCard
              key={index}
              url={x.url}
              name={x.name}
              desc={x.desc}
              role={x.role}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
