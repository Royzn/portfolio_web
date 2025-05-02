import React from "react";

function Card({ title, desc }) {
  return (
    <>
      <div className="w-full h-fit py-4 px-4 bg-white rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl mb-5 text-center">{title}</h2>
          {desc}
        </div>
      </div>
    </>
  );
}

export default function Experiences() {
  return (
    <>
      <div className="mx-16">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Education
        </h1>
        <div className="flex gap-10 justify-center mt-20">
          <Card
            title={"Bina Nusantara University"}
            desc={
              <>
                <p className="text-customBlack opacity-50">2021 - 2025</p>
                <p className="text-customBlack opacity-50">Computer Science</p>
              </>
            }
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-10">
          Experiences
        </h1>
        <div className="flex flex-col gap-10 justify-center mt-20">
          <Card
            title={"Garasi Kami"}
            desc={
              <>
                <p className="text-customBlack opacity-50">
                  Social Media Manager
                </p>
                <p className="text-customBlack opacity-50">
                  (Nov 2021 - Present)
                </p>
                <ul className="list-disc list-inside text-customBlack opacity-70 text-sm mt-2 space-y-1">
                  <li>
                    Conduct SEO research of hashtags and keywords for Instagram
                    and around 700K+ accounts reached every month to increase
                    engagement rate by 15%.
                  </li>
                  <li>
                    Engaged accounts up to 60% every month by implementing
                    advertisements and interesting content for Instagram.
                  </li>
                  <li>
                    Helped gain followers up to 1% every week by understanding
                    customer behavior through Instagram Manager and
                    brainstorming solutions with teams.
                  </li>
                </ul>
              </>
            }
          />

          <Card
            title={"PT Nusantara Compnet Integrator"}
            desc={
              <>
                <p className="text-customBlack opacity-50">
                  Full Stack Developer Intern
                </p>
                <p className="text-customBlack opacity-50">
                  (Mar 2024 - Mar 2025)
                </p>
                <ul className="list-disc list-inside text-customBlack opacity-70 text-sm mt-2 space-y-1">
                  <li>
                    Confirming project requirement by reviewing program
                    objective, input data, and output requirements with analyst,
                    superior, and client to ensure accuracy and completeness.
                  </li>
                  <li>
                    Encoding project requirements by converting workflow
                    information into computer language
                  </li>
                  <li>Confirming program operation by conducting tests</li>
                  <li>
                    Maintaining historical records by documenting program
                    development program development and revisions
                  </li>
                  <li>
                    Collaborated with cross-functional teams to develop and
                    integrate new features and functionality into the company's
                    internal project management system, improving productivity
                    by 15%.
                  </li>
                  <li>
                    Troubleshooted and resolved complex coding issues, resulting
                    in a 30% decrease in website downtime and improved overall
                    performance.
                  </li>
                  <li>
                    Optimizing website performance in the front end for better
                    user experience and reduce data retrieve time up by 20%
                  </li>
                </ul>
              </>
            }
          />

          <Card
            title={"Bina Nusantara University"}
            desc={
              <>
                <p className="text-customBlack opacity-50">
                  Education Counselor
                </p>
                <p className="text-customBlack opacity-50">
                  (Jul 2021 - Nov 2021)
                </p>
                <ul className="list-disc list-inside text-customBlack opacity-70 text-sm mt-2 space-y-1">
                  <li>
                    Successfully helped 35 students find their talent and
                    interest to choose their career path and major.
                  </li>
                  <li>
                    Conduct marketing solutions and advertising to attract
                    students in their interest by doing research and surveys
                    then achieve engagement by 5%.
                  </li>
                  <li>
                    Approached more than 3 schools with around 200 students to
                    present study programs and benefits as a representative of
                    Bina Nusantara University.
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </div>
    </>
  );
}
