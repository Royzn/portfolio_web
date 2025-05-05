import { useState, useEffect } from "react";
import Header from "./component/Header";
import BodyHeader from "./component/BodyHeader";
import SlideElement from "./component/SlideElement";
import AboutMe from "./component/AboutMe";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Experiences from "./component/Experiences";
import EndSection from "./component/EndSection";

function App() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setShow(true);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  return (
    <>
      <div className="relative !scroll-smooth">
        <section
          className={`w-full h-screen bg-customBlack fixed top-0 z-40 transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-5 items-center justify-center h-full text-customWhite">
            <a href="#about-me" onClick={handleToggle}>
              About Me
            </a>
            <a href="#projects" onClick={handleToggle}>
              Projects
            </a>
            <a href="doc/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
            <div className="flex gap-5 items-center">
              <a
                href="https://www.linkedin.com/in/royzenanggatama/"
                target="_blank"
              >
                <img className="h-14" src="linkedin.png" alt="" />
              </a>
              <a href="https://www.instagram.com/royz.a/" target="_blank">
                <img className="h-10" src="instagram.png" alt="" />
              </a>
            </div>
          </div>
        </section>

        <section
          className={`sticky top-0 z-50 backdrop-blur-xl transform transition-all ease-in-out duration-1500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <Header onToggle={handleToggle} open={open} />
        </section>
        <section
          id="body-header"
          className={`transform transition-all ease-in-out duration-1500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <BodyHeader />
        </section>
        <section
          className={`transform transition-all ease-in-out duration-1500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <SlideElement />
        </section>
        <section
          id="about-me"
          className={`transform py-20 transition-all ease-in-out duration-1500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <AboutMe />
        </section>
        <section
          id="skills"
          className={`transform py-10 transition-all ease-in-out duration-1500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <Skills />
        </section>
        <section
          className={`transform py-10 transition-all ease-in-out duration-1500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <Experiences />
        </section>
        <section
          id="projects"
          className={`transform py-20 transition-all ease-in-out duration-1500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <Projects />
        </section>
        <section id="contact" className="transform py-20">
          <EndSection />
        </section>
        <footer className="absolute text-center bottom-0 w-full mt-10 text-customBlack opacity-70">
          © Royzen Anggatama - 2025
        </footer>
      </div>
    </>
  );
}

export default App;
