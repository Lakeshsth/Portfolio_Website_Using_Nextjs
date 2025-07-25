import React from 'react'
import { FaHamburger, FaHotel, FaGamepad } from 'react-icons/fa'

const Projects = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 overflow-hidden text-white text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-transparent to-teal-400 opacity-10 pointer-events-none" />

      <h2
        className="relative text-3xl md:text-4xl font-normal mb-12"
        style={{ fontFamily: 'Neue Machina', lineHeight: '1.3' }}
      >
        Built with{' '}
        <span className="italic text-teal-400">passion</span>,{' '}
        <span className="italic text-teal-400">practice</span>, and{' '}
        <span className="italic text-teal-400">purpose</span>.
        <br />
        <span className="block mt-4 font-semibold text-white">My Projects</span>
      </h2>

      <div className="relative grid gap-10 md:grid-cols-3 text-left">
        <a
          href="https://hotel-wesbite-git-main-lakesh-shresthas-projects-eb1139af.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition duration-300 hover:scale-105 transform"
        >
          <FaHotel className="text-teal-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Natural Lak Hotel</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            A hotel website project created using React to learn routing, image optimization, and reusable components.
          </p>
        </a>

        <a
          href="https://chef-cha.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition duration-300 hover:scale-105 transform"
        >
          <FaGamepad className="text-teal-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Chef Cha</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Chef Cha is a modern chef hiring platform built with Next.js by Lakesh and Prasidha. It connects users with professional chefs for home, event, or business needs. With a clean interface and real-time booking features, Chef Cha makes hiring skilled chefs easy and efficient.
          </p>
        </a>

        <a
          href="https://github.com/Lakeshsth/Krishi-Saathi-.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition duration-300 hover:scale-105 transform"
        >
          <FaGamepad className="text-teal-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Krishi Saathi</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Krishi Saathi is an innovative web platform developed for the hackathon, focusing on Agriculture and Rural Development.
          </p>
        </a>

        <a
          href="https://github.com/Lakeshsth/LakFoodWebsite.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition duration-300 hover:scale-105 transform"
        >
          <FaHamburger className="text-teal-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">LakFood – Food Delivery</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            A React-based food delivery platform built to practice component structure, UI design, and state handling.
          </p>
        </a>

        <a
          href="https://github.com/Lakeshsth/Job-Portal-Django-Project.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition duration-300 hover:scale-105 transform"
        >
          <FaGamepad className="text-teal-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Job Portal</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Job Portal is a web-based application built with Django that connects job seekers with employers. It includes features like authentication, job filtering, admin dashboard, and email notifications.
          </p>
        </a>

        <a
          href="https://github.com/Lakeshsth/Bubble-Game-Using-JS.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition duration-300 hover:scale-105 transform"
        >
          <FaGamepad className="text-teal-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Bubble Game</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            A simple interactive game developed to explore event handling and dynamic rendering in React.
          </p>
        </a>
      </div>
    </section>
  )
}

export default Projects
