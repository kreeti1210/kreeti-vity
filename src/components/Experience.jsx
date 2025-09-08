import React from "react";

const Experience = () => {
  return (
    <section className="px-6 py-10 max-w-4xl mx-auto ">
      <h2 className="text-4xl font-bold mb-6 text-indigo-600">Experience</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold  mb-2">
            Optum – UnitedHealth Group
          </h3>
          <p className="text-xl text-gray-600">
            Associate Software Engineer | 2022–2025
          </p>
          <p className="mt-2 text-white-700">
            At Optum, a Fortune 500 healthcare leader, I worked on backend
            systems that processed thousands of real-time transactions daily,
            handling sensitive patient data with high concurrency and
            reliability for Priority 1 applications - ACIS (Automated Case
            Implementaion System) and CIX. As a Java full stack developer, I
            maintained ACIS legacy Java infrastructure and debugged production
            issues on RHEL servers, while also contributing to React.js
            components that interfaced with these systems. Collaborating across
            time zones with the US onshore team, I ensured smooth handoffs and
            consistent delivery in a global setup.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            ACIS CDS Macro Import
          </h3>
          <p className="text-sm text-gray-600">
            Key Contributor | Optum | Apr–May 2024
          </p>
          <p className="mt-2 text-gray-700">
            I played a pivotal role in developing a React segment for the ACIS
            Import process—a Priority 1 application—designed to replace the
            legacy CDX macro used by Global Solutions customers. This
            modernization effort streamlined workflows, improved usability, and
            ensured business-critical needs were met. My contributions focused
            on aligning frontend logic with backend data flows, enhancing
            performance, and delivering a clean, intuitive user experience.
          </p>
        </div>

        {/* <div>
          <h3 className="text-xl font-semibold text-gray-900">Auth MongoDB</h3>
          <p className="text-sm text-gray-600">
            Full-stack Developer | Personal Project
          </p>
          <p className="mt-2 text-gray-700">
            This project deepened my understanding of secure architecture. I
            built a robust authentication system using MongoDB, bcryptjs, and
            Nodemailer, with a React frontend. Handling secure sessions and form
            validation required iterative testing and clean design
            principles—skills I now bring to every scalable app I build.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
