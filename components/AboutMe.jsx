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
            Creative and detail-oriented <strong>Graphic Designer & Full-Stack Developer</strong> 
            with 3+ years of professional experience delivering impactful designs and building responsive web applications. 
            Skilled in blending visual creativity with technical expertise to produce both engaging designs and functional digital solutions.
          </p>
        </Section>

        <Section title="Work Experience">
          <div>
            <strong>Graphic Designer | Pumori Journeys (Full-time)</strong> | Oct 2023 – Jul 2024 | <a href="https://www.pumorijourneys.com" className="text-teal-400 underline">Website</a>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Designed digital and print materials for the travel & tourism industry.</li>
              <li>Created brochures, social media visuals, and campaigns to promote tourism services.</li>
              <li>Maintained a cohesive and modern brand identity across all platforms.</li>
            </ul>
          </div>

          <div className="mt-4">
            <strong>Graphic Designer | Snowbird Studios (Full-time)</strong> | Apr 2024 – May 2025 | <a href="https://snowbirdstudios.com.np" className="text-teal-400 underline">Website</a>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Successfully delivered design projects for 10+ companies across healthcare, edtech, finance, fashion, and hospitality.</li>
              <li>Collaborated with brands such as Naasa Security Broker 58, Arrows Lifestyle, Ganeshman Singh Hospital, Yashi Labs, Yashi Academy App, Sarcs- Finance Company, and Pearl Jewellers.</li>
              <li>Specialized in branding, logo design, social media creatives, UI/UX mockups, and digital marketing assets.</li>
              <li>Worked with cross-functional teams to ensure designs matched client expectations and enhanced brand identity.</li>
            </ul>
          </div>

          <div className="mt-4">
            <strong>Graphic Designer | Postory Production Pvt. Ltd.</strong> | Jul 2021 – Present | <a href="https://postory.com.np" className="text-teal-400 underline">Website</a>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Designed branding and marketing materials for multiple restaurants and businesses, including:</li>
              <li>Michael Grill Restaurant – Menu Design, Social Media & Promotional Graphics</li>
              <li>Cafe MRP Restaurant – Logo, Social Media Creatives, and Identity Design</li>
              <li>Ojas International – Logo, Corporate Materials, Digital Campaigns, and Promotional Graphics</li>
            </ul>
          </div>
        </Section>

        <Section title="Technical Skills">
          <p><strong>Design & Illustration Tools:</strong> Adobe Photoshop, Illustrator, InDesign</p>
          <p><strong>Video & Motion Graphics:</strong> Adobe Premiere Pro, After Effects, Canva Pro (motion), CapCut</p>
          <p><strong>UI/UX & Prototyping:</strong> Figma, Sketch, Canva</p>
          <p><strong>Typography & Branding:</strong> Logo design, Brand Identity creation, Layout design, Poster/Banner design</p>
          <p><strong>Web & Creative Edge:</strong> Django React.js, Next.js, Tailwind CSS (useful for UI/UX projects)</p>
        </Section>

        <Section title="Education">
          <p>
            <strong>B.Sc. IT (2022 - Present)</strong> – King’s College (Westcliff University, CA)<br />
            <strong>High School:</strong> Capital College & Research Center (CCRC)<br />
            <strong>School:</strong> Nawaratna Life School
          </p>
        </Section>

       
        <Section title="Soft Skills & Languages">
          <p>Creativity, Communication, Teamwork, Problem-Solving, Time Management, Leadership</p>
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
