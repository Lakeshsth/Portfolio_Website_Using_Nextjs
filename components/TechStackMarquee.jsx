import React from "react";

const techStack = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "Docker",
  "AWS",
  "Git",
  "Redux",
];

const TechStackMarquee = () => {
  return (
    <section className="py-10 border border-teal-400/40 ">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1
          className="text-teal-400 text-3xl md:text-4xl font-semibold mb-2"
          style={{ fontFamily: 'Neue Machina', lineHeight: '1.3' }}
        >
          Tech Stack I Know
        </h1>
        <p className="text-white text-lg mb-6">
          These are the technologies and tools I use to build modern, scalable web applications.
        </p>
      </div>

      <div className="overflow-hidden whitespace-nowrap select-none">
        <div
          className="inline-block animate-marquee text-teal-400 text-xl md:text-2xl font-medium tracking-wide"
          style={{ minWidth: "200%" }}
        >
          {techStack.map((tech, idx) => (
            <span key={idx} className="mx-12">
              {tech}
            </span>
          ))}
          
          {techStack.map((tech, idx) => (
            <span key={"repeat-" + idx} className="mx-12">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackMarquee;
