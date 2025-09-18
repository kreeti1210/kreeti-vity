import React from 'react'

const Home = () => {
  return (
    <>
      <div className="px-4 md:px-10 py-10 max-w-4xl mx-auto flex flex-col text-center mb-15">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-25 text-center md:text-left">
          <div className="flex flex-col space-y-4 max-w-4xl">
            <h2 className="text-4xl font-semibold">Kreeti Sharma</h2>
            <p className="text-xl">
              Associate Software Engineer with 3 years experience in Java/React
              FSE, now leveled up to become Full Stack Web Developr with
              efficiency in JavaScript, React.js, Tailwind CSS, Node.js,
              Express, and Relational DB.
            </p>
          </div>
          <div>
            <img
              src="./src/assets/kreeti.jpg"
              className=" rounded-full drop-shadow-2xl object-cover"
              alt="Profile Photo"
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-16 text-left">
          <h2 className="text-4xl font-semibold mb-4 ">Work Experience</h2>
          <div className="space-y-2">
            <p className="text-2xl font-medium">Optum - United Health Group</p>
            <p className="text-md text-gray-400">
              Associate Software Engineer | 2022–2025
            </p>
            <p className="text-lg leading-relaxed max-w-3xl">
              As a Software Engineer at Optum (Full-time, 2022–2025), I was
              responsible for designing, developing, and implementing software
              solutions. My role involved utilizing programming skills and
              collaborating with cross-functional teams to deliver high-quality
              software products. I focused on problem-solving and contributed to
              projects that met specific organizational requirements.
            </p>
            <button className="btn bg-indigo-600 text-white py-2 px-4 rounded-md mt-2">
              View Experience
            </button>
          </div>
        </div>
        <section>
          <h2 className="text-4xl font-semibold mb-6 text-left mt-15">
            Projects
          </h2>
          <div className="space-y-2 flex flex-row gap-10 ">
            <div className="card bg-base-100 w-66 shadow-sm">
              <figure>
                <img
                  src="./src/assets/Leetlabcover.jpg"
                  alt="LeetLab Project"
                />
              </figure>
              <div className="card-body space-between flex ">
                <h2 className="card-title text-2xl font-semibold">LeetLab</h2>
                <div className="card-actions align-end">
                  <div className="badge badge-secondary badge-outline align-end ">
                    Self Project
                  </div>
                  <div className="badge badge-secondary align-end">2025</div>
                </div>

                <p className="text-gray-300 text-wrap text-left">
                  Leetlab is a Leetcode-inspired application that leverages the
                  Judge0 API to enable users to execute code directly on the
                  platform. This project follows the SDLC and integrates
                  third-party services to replicate key functionalities of
                  Leetcode.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-indigo-600 text-white py-2 px-4 rounded-md">
                    Visit
                  </button>
                  <button className="btn  btn-outline text-indigo-600 py-2 px-4 rounded-md">
                    Github
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-66 shadow-sm">
              <figure>
                <img src="./src/assets/AuthFullCover.png" alt="AuthProject" />
              </figure>
              <div className="card-body space-between flex ">
                <h2 className="card-title text-2xl font-semibold">
                  Auth Full Stack
                </h2>
                <div className="card-actions align-end">
                  <div className="badge badge-secondary badge-outline align-end ">
                    Self Project
                  </div>
                  <div className="badge badge-secondary align-end">2025</div>
                </div>

                <p className="text-gray-300 text-wrap text-left">
                  A lightweight, production-ready authentication backend built
                  with Node.js, Express, and MongoDB. Includes secure login, JWT
                  support, and scalable code structure — perfect for full-stack
                  applications.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-indigo-600 text-white py-2 px-4 rounded-md">
                    Visit
                  </button>
                  <button className="btn  btn-outline text-indigo-600 py-2 px-4 rounded-md">
                    Github
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-66 shadow-sm">
              <figure>
                <img src="./src/assets/DarkMode.png" alt="AuthProject" />
              </figure>
              <div className="card-body space-between flex ">
                <h2 className="card-title text-2xl font-semibold">
                  Kanban Board
                </h2>
                <div className="card-actions align-end">
                  <div className="badge badge-secondary badge-outline align-end ">
                    Self Project
                  </div>
                  <div className="badge badge-secondary align-end">2025</div>
                </div>

                <p className="text-gray-300 text-wrap text-left">
                  It is an complete todo app list with three progress list -
                  todo , doing and done. Each one can have multiple tasks and on
                  completion user can move the task from one list to another.
                  They can also edit the task and delete them.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-indigo-600 text-white py-2 px-4 rounded-md">
                    Visit
                  </button>
                  <button className="btn  btn-outline text-indigo-600 py-2 px-4 rounded-md">
                    Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mb-6 text-center mt-15">
            Skills
          </h2>
          <div className="justify-center flex flex-row gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="react logo"
              className="w-10 h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react logo"
              className="w-10 h-10"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript logo"
              className="w-10 h-10"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="nodejs logo"
              className="w-10 h-10"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="postgresql logo"
              className="w-10 h-10"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="mongodb logo"
              className="w-10 h-10"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              className="w-10 h-10"
              alt="css3 logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git logo"
              className="w-10 h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
              alt="linux logo"
              className="w-10 h-10"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home