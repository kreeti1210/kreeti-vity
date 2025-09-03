import React from 'react'

const Home = () => {
  return (
    <>
      <div>
      
        <div className="flex flex-row  items-center justify-center align-center">
          <div className="flex flex-col margin:auto items-center justify-center align-center">
            <h2 className="text-left w-1/2 text-center">
              Hey there! I'm Kreeti
            </h2>
            <p className="text-left w-1/2 text-center">
              Full-stack developer with 2.5+ years in Java/React, now leveled up
              to JavaScript, React.js, Tailwind CSS, Node.js, MongoDB, and
              PostgreSQL.
            </p>
          </div>
          <img
            src="./src/assets/kreeti.jpg"
            className="max-w-1/4 rounded-full px-10 py-10 items-left drop-shadow-2xl"
            alt="Profile Photo"
          />
        </div>
        <div className="flex flex-col items-center justify-center align-center ">
          <h2>Experience</h2>
          <div className="flex flex-col text-left items-center justify-center align-center margin:auto">
            <p>Optum - United Health Group</p>
            <p>Associate Software Engineer</p>
            <p className="text-left w-1/2 text-center">
              As a Software Engineer at Optum (Full-time, 2022-2025), I was
              responsible for designing, developing, and implementing software
              solutions. My role involved utilizing programming skills and
              collaborating with cross-functional teams to deliver high-quality
              software products. I focused on problem-solving and contributed to
              projects that met specific organizational requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home