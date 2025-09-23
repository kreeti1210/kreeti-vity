import React from "react";

const Experience = () => {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto text-justify bg-black ">
      <h2 className="text-4xl font-bold mb-6 text-indigo-600">Experience</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold  mb-2">
            Optum – UnitedHealth Group
          </h3>
          <p className="text-xl text-gray-400">
            Associate Software Engineer | 2022–2025
          </p>
          <p className="mt-2 text-white-700">
            At Optum, a Fortune 500 healthcare leader, I worked on backend
            systems that processed thousands of real-time transactions daily,
            handling sensitive patient data with high concurrency and
            reliability for Priority 1 applications - ACIS (Automated Case
            Implementaion System) and CIX (Customer Installation Express) <br />
            As a Java full stack developer, I maintained ACIS legacy Java
            infrastructure and debugged production issues, handled RHEL servers,
            while also contributing to developing React.js components
            incorporating data from one P1 application to another.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-2 text-left mt-10 mb-4">
            Projects
          </h2>
          <h3 className="text-2xl font-semibold mb-2">ACIS CDS Macro Import</h3>
          <p className="text- text-gray-400">Optum | Apr–May 2024</p>
          <p className="mt-2 text-gray-300">
            I played a pivotal role in developing a React segment for the ACIS
            Import process—a Priority 1 application—designed to replace the
            legacy CDX macro used by Global Solutions customers. Collaborating
            with the US onshore team, I also helped modernize parts of the
            platform using React.js, contributing to frontend components that
            interfaced with these high-volume systems. The scale was
            significant—not just in terms of user load, but also in the
            complexity of data flows and compliance requirements. Working across
            time zones taught me to be proactive and flexible, ensuring smooth
            handoffs and consistent delivery despite the global nature of the
            team and customer base.
          </p>
          <div className="flex flex-row gap-5 mt-5">
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
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2 mt-12">
            ACIS (Automated Case Implementation System)
          </h3>
          <p className="text- text-gray-400 mb-4">Optum | Sept 2022 - April 2025</p>
          <p className="mt-2 text-gray-300">
            ACIS (Automated Case Implementation System) is a priority one
            application that offers various plans, coverage and medical benefits
            to the global customers. It had both legacy version (Java) and
            modernized web application (React). It captures essential
            confidential data and information, and those data was sent to the
            ACIS internal application that further provides unique solution to
            the customer as required following all the safety measures. My
            onshore team including myself developed, handled and maintained the
            efficient performance of both legacy and modernized web application.
            <br /><br /> Besides, I led the MQ migration to version 9, ensuring
            successful testing across environments, and supported the RHEL 7 to
            RHEL 8 server migration, reducing infrastructure costs. I
            proactively created ACIS test customers to improve data accuracy and
            user experience and learnt Microsoft Visio to maintain critical
            interface documentation. Beyond technical contributions, I’ve
            supported team members by sharing knowledge, assisting with Test
            Data Requests, and collaborating on root cause analyses to prevent
            recurring issues. I’ve taken on additional responsibilities like
            handling SOX audit evidence and daily compliance emails, while
            maintaining a proactive stance on security protocols.
          </p>
          <div className="flex flex-row gap-5 mt-5">
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
    </section>
  );
};

export default Experience;
