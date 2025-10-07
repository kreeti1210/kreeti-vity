import React from "react";

const Experience = () => {
  return (
    <div className="bg-black w-full ">
      <section className="px-13 py-10 max-w-5xl mx-auto text-justify bg-base-300 ">
        <h2 className="text-3xl text-center font mb-6 text-white">
          Experience
        </h2>

        <div className="space-y-8  ">
          <div className="px-6 py-6 rounded bg-base-100">
            <h3 className="text-2xl font-semibold  mb-1">
              Optum – UnitedHealth Group
            </h3>
            <p className="text-lg text-gray-400 mb-4">
              Associate Software Engineer | 2022–2025
            </p>
            <p className="mt-2 mb-4 text-sm text-justify text-gray-300">
              At Optum, a Fortune 500 healthcare leader, I worked on backend
              systems that processed thousands of real-time transactions daily,
              handling sensitive patient data with high concurrency and
              reliability for Priority 1 applications - ACIS (Automated Case
              Implementaion System) and CIX (Customer Installation Express).{" "}

              As a Java full stack developer, I maintained ACIS legacy Java
              infrastructure and debugged production issues, handled RHEL
              servers, while also contributing to developing React.js components
              incorporating data from one P1 application to another.
            </p>
          </div>

          <div className="px-10 py-7 outline bg-base-100 rounded-xl mt-10 mb-10">
            <h2 className="text-3xl   text-center mb-6">Projects</h2>
            <h3 className="text-2xl font-semibold mb-1">
              ACIS CDS Macro Import
            </h3>
            <p className=" text-gray-400">Optum | Apr–May 2024</p>
            <p className="mt-2 text-sm text-gray-300">
              I played a pivotal role in developing a React segment for the ACIS
              Import process—a Priority 1 application—designed to replace the
              legacy CDX macro used by Global Solutions customers. Collaborating
              with the US onshore team, I also helped modernize parts of the
              platform using React.js, contributing to frontend components that
              interfaced with these high-volume systems. The scale was
              significant—not just in terms of user load, but also in the
              complexity of data flows and compliance requirements. Working
              across time zones taught me to be proactive and flexible, ensuring
              smooth handoffs and consistent delivery despite the global nature
              of the team and customer base.
            </p>
            <div className="flex flex-row gap-5 mt-5 mb-2">
              <button className="btn btn-ghost outline text-white px-3 py-1 rounded-xl">
                Java
              </button>
              <button className="btn btn-ghost outline text-white px-4 py-2 rounded-xl">
                JavaScript
              </button>
              <button className="btn btn-ghost outline text-white px-4 py-2 rounded-xl">
                React
              </button>
              <button className="btn btn-ghost outline text-white px-4 py-2 rounded-xl">
                SQL
              </button>
              <button className="btn btn-ghost outline text-white px-4 py-2 rounded-xl">
                Agile methodology
              </button>
            </div>

            <div className="mt-15 bg-base-100 rounded">
              <h3 className="text-2xl font-semibold mb-1 mt-4">
                ACIS (Automated Case Implementation System)
              </h3>
              <p className=" text-gray-400 mb-4">
                Optum | Sept 2022 - April 2025
              </p>
              <p className="mt-2 text-sm text-gray-300">
                ACIS (Automated Case Implementation System) is a priority one
                application that offers various plans, coverage and medical
                benefits to the global customers. It had both legacy version
                (Java) and modernized web application (React). It captures
                essential confidential data and information, and those data was
                sent to the ACIS internal application that further provides
                unique solution to the customer as required following all the
                safety measures. My onshore team including myself developed,
                handled and maintained the efficient performance of both legacy
                and modernized web application.
                <br />
                <br /> Besides, I led the MQ migration to version 9, ensuring
                successful testing across environments, and supported the RHEL 7
                to RHEL 8 server migration, reducing infrastructure costs. I
                proactively created ACIS test customers to improve data accuracy
                and user experience and learnt Microsoft Visio to maintain
                critical interface documentation. Beyond technical
                contributions, I’ve supported team members by sharing knowledge,
                assisting with Test Data Requests, and collaborating on root
                cause analyses to prevent recurring issues. I’ve taken on
                additional responsibilities like handling SOX audit evidence and
                daily compliance emails, while maintaining a proactive stance on
                security protocols.
              </p>
              <div className="flex flex-row gap-5 mt-5 mb-2">
                <button className="btn btn-ghost outline text-white px-3 py-1 rounded-xl">
                  Java
                </button>
                <button className="btn btn-ghost outline text-white px-4 py-2 rounded-xl">
                  Debugging
                </button>
                <button className="btn btn-ghost outline text-white px-4 py-2 rounded-xl">
                  RHEL
                </button>
                <button className="btn btn-ghost outline text-white px-4 py-2 rounded-xl">
                  SQL
                </button>
                <button className="btn btn-ghost outline text-white px-4 py-2 rounded-xl">
                  Rabbit MQ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
