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
            <p className="text-md text-gray-700">Associate Software Engineer | 2022–2025</p>
            <p className="text-lg leading-relaxed max-w-3xl">
              As a Software Engineer at Optum (Full-time, 2022–2025), I was
              responsible for designing, developing, and implementing software
              solutions. My role involved utilizing programming skills and
              collaborating with cross-functional teams to deliver high-quality
              software products. I focused on problem-solving and contributed to
              projects that met specific organizational requirements.
            </p>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md">
              View Experience
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home