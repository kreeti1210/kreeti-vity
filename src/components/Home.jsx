import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-black">
      <div className="px-4 md:px-10 py-10 max-w-5xl  mx-auto flex flex-col text-center  px-10 rounded-lg bg-base-300 ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-25 text-center md:text-left py-10 px-4 ">
          <div className="flex flex-col space-y-4 max-w-4xl ">
            <h2 className="text-4xl font-semibold">Kreeti Sharma</h2>
            <p className="text-xl text-justify">
              Full Stack Engineer with 3 years of professional experience in
              Java and React, now specializing in end-to-end web development.
              Skilled in JavaScript, React.js, Node.js, Tailwind CSS, Express,
              and relational databases.{" "}
            </p>
          </div>
          <div>
            <img
              src="./src/assets/kreeti.jpg"
              className="  max-w-60 rounded-full drop-shadow-2xl object-cover  "
              alt="Profile Photo"
            />
          </div>
        </div>


        <div className="mt-10 text-justify py-10 px-10  mb-4 rounded-lg outline  shadow-md bg-base-200">
        
          <div className="space-y-3">
            <p className="text-2xl text-center font-medium ">
              Optum - United Health Group
            </p>
            <p className="text text-center text-gray-400 mb-4">
              Associate Software Engineer | 2022–2025
            </p>
            <p className="text-lg leading-relaxed max-w-5xl">
              As a Software Engineer at Optum (Full-time, 2022–2025), I was
              responsible for designing, developing, and implementing software
              solutions. My role involved utilizing programming skills and
              collaborating with cross-functional teams to deliver high-quality
              software products. I focused on problem-solving and contributed to
              projects that met specific organizational requirements.
            </p>
            <Link to="/experience">
              <button
                className="btn bg-indigo-600 text-white py-2 px-4 rounded-md mt-2"
                type="button"
              >
                View Experience
              </button>
            </Link>
          </div>
        </div>
        <section>
          <h2 className="text-3xl font-semibold mb-6 mt-10  align-center items-center text-center shadow-content  py-2 text-wrap ">
            Web Projects
          </h2>
          <div className="space-y-3 flex flex-row gap-10 ">
            <div className="card bg-base-100 w-1/3 shadow-sm">
              <figure>
                <img
                  src="./src/assets/Leetlabcover.jpg"
                  alt="LeetLab Project"
                />
              </figure>
              <div className="card-body space-between flex ">
                <h2 className="card-title text-2xl font-semibold">LeetLab</h2>
                <div className="card-actions align-end">
                  <div className="badge badge-primary badge-outline align-end ">
                    Self Project
                  </div>
                  <div className="badge badge-primary align-end">2025</div>
                </div>

                <p className="text-gray-300 text-wrap text-left">
                  Leetlab is a Leetcode-inspired application that leverages the
                  Judge0 API to enable users to execute code directly on the
                  platform. This project follows the SDLC and integrates
                  third-party services to replicate key functionalities of
                  Leetcode.
                </p>
                <div className="card-actions w-full flex gap-4">
                  <button className="btn flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md">
                    Visit
                  </button>
                  <button className="btn flex-1 btn-outline text-indigo-600 py-2 px-4 rounded-md">
                    Github
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-1/3 shadow-sm">
              <figure>
                <img src="./src/assets/DarkMode.png" alt="AuthProject" />
              </figure>
              <div className="card-body space-between flex ">
                <h2 className="card-title text-2xl font-semibold">
                  Kanban Board
                </h2>
                <div className="card-actions align-end">
                  <div className="badge badge-primary badge-outline align-end ">
                    Self Project
                  </div>
                  <div className="badge badge-primary align-end">2025</div>
                </div>

                <p className="text-gray-300 text-wrap text-justify">
                  It is an complete todo app list with three progress list -
                  todo , doing and done. Each one can have multiple tasks and on
                  completion user can move the task from one list to another.
                  They can also edit the task and delete them.
                </p>
                <div className="card-actions w-full flex gap-4">
                  <button className="btn flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md">
                    Visit
                  </button>
                  <button className="btn flex-1 btn-outline text-indigo-600 py-2 px-4 rounded-md">
                    Github
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-1/3 shadow-sm">
              <figure>
                <img src="./src/assets/AuthFullCover.png" alt="AuthProject" />
              </figure>
              <div className="card-body space-between  ">
                <h2 className="card-title text-2xl font-semibold">
                  Auth Full Stack
                </h2>
                <div className="card-actions align-end">
                  <div className="badge badge-primary badge-outline align-end ">
                    Self Project
                  </div>
                  <div className="badge badge-primary align-end">2025</div>
                </div>

                <p className="text-gray-300 text-wrap text-justify">
                  A lightweight, production-ready authentication backend built
                  with Node.js, Express, and MongoDB. Includes secure login, JWT
                  support, and scalable code structure — perfect for full-stack
                  applications.
                </p>
                <div className="card-actions w-full flex gap-4">
                  <button className="btn flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md">
                    Visit
                  </button>
                  <button className="btn flex-1 btn-outline text-indigo-600 py-2 px-4 rounded-md">
                    Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 rounded-xl  mt-12 mb-15">
          <h2 className="text-3xl font-semibold mb-10  text-white">
            Skills & Technology
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Skill Item */}
            <div className="flex flex-col items-center justify-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
                className="w-12 h-12 mb-2"
              />
              <p className="text-sm font-medium text-center">Java</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-12 h-12 mb-2"
              />
              <p className="text-sm font-medium text-center">React</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-12 h-12 mb-2"
              />
              <p className="text-sm font-medium text-center">JavaScript</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-12 h-12 mb-2"
              />
              <p className="text-sm font-medium text-center">Node.js</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
                className="w-12 h-12 mb-2"
              />
              <p className="text-sm font-medium text-center">PostgreSQL</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="w-12 h-12 mb-2"
              />
              <p className="text-sm font-medium text-center">MongoDB</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
                className="w-12 h-12 mb-2"
              />
              <p className="text-sm font-medium text-center">CSS3</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                className="w-12 h-12 mb-2"
              />
              <p className="text-sm font-medium text-center">Git</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                alt="Linux"
                className="w-12 h-12 mb-2"
              />
              <p className="text-sm font-medium text-center">Linux</p>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full  text-white text-left mt-10 mb-8 ">
            <div className=" bg-opacity-20   bg-base-100 p-6 rounded-lg ">
              <h4 className="text-3xl font-semibold mb-2">Connect through other platforms?</h4>
              <p className="mb-1 px-1 text-sm text-gray-400">
                Here are some other ways to get in touch with me
              </p>
              <div className="flex flex-row gap-4 ">
                <Link
                  to="https://www.linkedin.com/in/kreeti-sharma-353072195/"
                  className="inline-block px-6 py-2 bg-white text-black mt-6 text-right rounded-lg font-medium hover:bg-gray-200 transition"
                >
                  LinkedIn
                </Link>
                <Link
                  to="https://github.com/kreeti1210"
                  className="inline-block px-6 py-2 bg-white text-black mt-6 text-right rounded-lg font-medium hover:bg-gray-200 transition"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
