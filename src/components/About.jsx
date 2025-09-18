import React from 'react'

const About = () => {
  return (
    <div>
      <section className="px-6 py-10 max-w-4xl mx-auto ">
        <h2 className="text-4xl font-bold mb-6 text-indigo-600">Education</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold  mb-2">
              Bachelor of Technology in Information Technology
            </h3>
            <p className="text-xl text-gray-400">
              KIET Group of Institutions | 2018–2022
            </p>
            <p className="mt-2 text-white-700">
              Bonafied Graduated from KIET Group of Institutions affiliated to
              Dr. A. P. J. Abdul Kalam Technical University, Lucknow with a
              Bachelor of Technology in Information Technology. I have a strong
              foundation in computer science and a passion for software
              development.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold  mb-2">Intermediate</h3>
            <p className="text-xl text-gray-400">Little Flower School | 2017</p>
            <p className="mt-2 text-white-700">
              Completed my Intermediate education from Little Flower School,
              affiliated to ISC Board, New Delhi. with 93% in Maths and Computer
              Science ISC board Examination.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold  mb-2">High School</h3>
            <p className="text-xl text-gray-400">Little Flower School | 2016</p>
            <p className="mt-2 text-white-700">
              Completed my High School education from Little Flower School,
              affiliated to ICSE Board, New Delhi. with 92.83% in CISCE board
              Examination.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 py-10 max-w-4xl mx-auto mb-15">
        <h2 className="text-4xl font-bold mb-6 text-indigo-600">
          Certifications
        </h2>

        <div className="space-y-8">
          <div className="flex flex-row justify-between">
            <div>
              <h3 className="text-2xl font-semibold  mb-2">
                Full Stack Web Development Cohort
              </h3>
              <p className="text-xl text-gray-400">
                Hitesh Choudhary | Piyush Garg | 2025
              </p>
            </div>
            <button className="btn btn-ghost outline mt-2 text-xs text-white px-4 rounded-2xl">
              View Cetificate
            </button>
          </div>

          <div className="flex flex-row justify-between">
            <div>
              <h3 className="text-2xl font-semibold  mb-2">
                Infosys Certified Software Programmer
              </h3>
              <p className="text-xl text-gray-400 ">Infosys | 2021</p>
            </div>
            <button className="btn btn-ghost justify-end outline mt-2 text-white px-4  text-xs rounded-2xl">
              View Cetificate
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <h3 className="text-2xl font-semibold  mb-2">
                Java Programming: Principles of Software Design
              </h3>
              <p className="text-xl text-gray-400">Coursera | 2020</p>
            </div>
            <button className="btn btn-ghost outline mt-2 text-xs text-white px-4  rounded-2xl">
              View Cetificate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About