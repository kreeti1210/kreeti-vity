import React from 'react'

const Home = () => {
  return (
    <>
      <div className="px-4 md:px-10 py-10 max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-25 text-center md:text-left">
          <div className="flex flex-col space-y-4 max-w-md">
            <h2 className="text-4xl font-semibold">Kreeti Sharma</h2>
            <p className="text-xl">
              Full-stack developer with 2.5+ years in Java/React, now leveled up
              to JavaScript, React.js, Tailwind CSS, Node.js, MongoDB, and
              PostgreSQL.
            </p>
          </div>
          <div>
            <img
              src="./src/assets/kreeti.jpg"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full drop-shadow-2xl object-cover"
              alt="Profile Photo"
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-16 text-left">
          <h2 className="text-4xl font-semibold mb-6 ">Work Experience</h2>
          <div className="space-y-2">
            <p className="text-lg font-medium">Optum - United Health Group</p>
            <p className="text-md text-gray-700">
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
            <button className="btn bg-indigo-600 text-white py-2 px-4 rounded-md">
              View Experience
            </button>
          </div>
        </div>
        <section>
          <h2 className="text-4xl font-semibold mb-6 text-left mt-10">Projects</h2>
          <div className="space-y-2 flex flex-row gap-10 ">
            <div className="card bg-base-100 w-96 shadow-sm">
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
                  LeetLab is a full-stack coding platform inspired by LeetCode,
                  enabling users to solve daily DSA problems with real-time code
                  execution via the Judge0 API. Built using React, Node.js, and
                  PostgreSQL, it features authentication, role management,
                  playlists, and a responsive UI—developed during the ChaiCode
                  Web Development Course.
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
            <div className="card bg-base-100 w-96 shadow-sm">
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
                  LeetLab is a full-stack coding platform inspired by LeetCode,
                  enabling users to solve daily DSA problems with real-time code
                  execution via the Judge0 API. Built using React, Node.js, and
                  PostgreSQL, it features authentication, role management,
                  playlists, and a responsive UI—developed during the ChaiCode
                  Web Development Course.
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
      </div>
    </>
  );
}

export default Home