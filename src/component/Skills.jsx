import React from "react";

function Section({ icon, title, caption }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 py-3 px-3 bg-gray-100 rounded-2xl">
        <div className="flex items-center justify-center">
          <img className="h-10" src={"/" + icon} alt="" />
        </div>

        <div className="text-center">
          <p className="font-bold">{title}</p>
          <p className="text-customBlack opacity-50">{caption}</p>
        </div>
      </div>
    </>
  );
}

function Card({ title, items }) {
  return (
    <>
      <div className="w-full h-fit py-4 px-4 bg-white rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl mb-5">{title}</h2>
          <div className="grid grid-cols-2 gap-5 w-full">
            {items.map((x, index) => (
              <Section
                key={index}
                icon={x.icon}
                title={x.title}
                caption={x.caption}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Skills() {
  const techstacklist = [
    {
      icon: "react.png",
      title: "React",
      caption: "Frontend library",
    },
    {
      icon: "tailwindcss.png",
      title: "Tailwind CSS",
      caption: "Utility-first CSS",
    },
    {
      icon: "nodejs.png",
      title: "Node JS",
      caption: "Backend runtime",
    },
    {
      icon: "express.png",
      title: "Express JS",
      caption: "Web framework",
    },
    {
      icon: "mongodb.png",
      title: "MongoDB",
      caption: "NoSQL database",
    },
    {
      icon: "mysql.png",
      title: "MySQL",
      caption: "Relational database",
    },
    {
      icon: "python.png",
      title: "Python",
      caption: "Programming language",
    },
    {
      icon: "javascript.png",
      title: "Javascript",
      caption: "Programming language",
    },
    {
      icon: "php.png",
      title: "PHP",
      caption: "Programming language",
    },
    {
      icon: "laravel.png",
      title: "Laravel",
      caption: "PHP framework",
    },
    {
      icon: "vuejs.png",
      title: "Vue JS",
      caption: "Frontend framework",
    },
    {
      icon: "html.png",
      title: "HTML",
      caption: "Markup language",
    },
    {
      icon: "css.png",
      title: "CSS",
      caption: "Styling language",
    },
    {
      icon: "firebase.png",
      title: "Firebase",
      caption: "Cloud platform",
    },
  ];

  const toolslist = [
    {
      icon: "vsc.png",
      title: "Visual Studio Code",
      caption: "Text editor",
    },
    {
      icon: "git.png",
      title: "Git",
      caption: "Version control",
    },
    {
      icon: "github.png",
      title: "GitHub",
      caption: "Code hosting",
    },
    {
      icon: "figma.png",
      title: "Figma",
      caption: "Design tool",
    },
    {
      icon: "gpt.png",
      title: "ChatGPT",
      caption: "Chatbot",
    },
    {
      icon: "canva.png",
      title: "Canva",
      caption: "Design tool",
    },
    {
      icon: "excalidraw.png",
      title: "Excalidraw",
      caption: "Drawing tool",
    },
    {
      icon: "notion.png",
      title: "Notion",
      caption: "Notion",
    }
  ];

  return (
    <>
      <div className="mx-14">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Skills</h1>
        <div className="flex flex-col md:flex-row gap-10 justify-center mt-20">
          <Card title={"Tech Stack"} items={techstacklist} />
          <Card title={"Tools"} items={toolslist} />
        </div>
      </div>
    </>
  );
}
