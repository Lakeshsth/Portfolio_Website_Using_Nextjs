'use client';
import React from 'react';

const AboutMe = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-20 text-white overflow-hidden bg-black mt-9">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-transparent to-teal-400 opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        <h2
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ fontFamily: 'Neue Machina' }}
        >
          About <span className="text-teal-400">Me</span>
        </h2>

        <Section title="Summary">
          <p>
            Aspiring full-stack developer with a foundation in both front-end and back-end technologies, transitioning from a graphic design background. Passionate about building impactful, user-friendly web applications.
          </p>
          <p>
            Skilled in Python, Django, React, and Git. Eager to contribute to real-world projects in a collaborative and creative development environment.
          </p>
        </Section>

        <Section title="Work Experience">
          <p>
            <strong>Graphic Designer (Remote) | 2021 - Present</strong><br />
            Delivered creative solutions for 10+ brands including Naasa Security Broker 58, Arrows Lifestyle, Ganeshman Singh Hospital, Snowbird, Yashi Labs, Pumori Journey, Yashi Academy, Postory, SARCS, and Pearl Jewellers.
          </p>
        </Section>

        <Section title="Courses & Training">
          <p>
            <strong>Sipalaya Info Tech</strong> – Completed a 3-month Python & Django Development course. Gained hands-on experience with REST APIs, MySQL, and deployment.
          </p>
        </Section>

        <Section title="Technical Skills">
          <p>
            Python, Django, JavaScript, React, Next.js, MySQL, MongoDB (basic), HTML/CSS, Tailwind CSS, Bootstrap, Git, GitHub, Figma, Photoshop, Illustrator, Premiere Pro, REST APIs, VS Code, Power BI, JIRA, Confluence.
          </p>
        </Section>

        <Section title="Education">
          <p>
            <strong>B.Sc. IT (2022 - Present)</strong> – King’s College (Westcliff University, CA)<br />
            <strong>High School:</strong> Capital College & Research Center (CCRC)<br />
            <strong>School:</strong> Nawaratna Life School
          </p>
        </Section>

        <Section title="Projects">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Krishi Saathi</strong> – Runner-Up, Hack the Future 2025</li>
            <li><strong>Job Portal</strong> – Django-based with resume upload & admin dashboard</li>
            <li>Bubble Game, Responsive Food Site, Resume Uploader, CRUD System, To-Do App</li>
          </ul>
        </Section>

        <Section title="Soft Skills & Languages">
          <p>Communication, Teamwork, Problem-Solving, Time Management, Leadership</p>
          <p>Languages: Nepali (Native), English (Fluent)</p>
        </Section>

        <div className="text-center mt-12 space-x-8">
          <a
            href="https://github.com/Lakeshsth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lakesh-shrestha-73799029"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

const Section = ({ title, children }) => (
  <div className="space-y-4 border-t border-white/10 pt-8">
    <h3 className="text-2xl font-semibold text-teal-400">{title}</h3>
    <div className="text-gray-300 leading-relaxed space-y-2">{children}</div>
  </div>
);

export default AboutMe;
