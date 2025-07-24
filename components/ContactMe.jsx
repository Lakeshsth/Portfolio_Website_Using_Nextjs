'use client';
import React from 'react';

const ContactMe = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-20 text-white overflow-hidden bg-black mt-9">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-transparent to-teal-400 opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        <h2
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ fontFamily: 'Neue Machina' }}
        >
          Contact <span className="text-teal-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Let's collaborate on your next project! Whether it's design, development, or both — I'm open to freelance, part-time, or full-time opportunities.
            </p>

            <div className="space-y-2 text-gray-300">
              <p><strong className="text-teal-400">Name:</strong> Lakesh Shrestha</p>
              <p><strong className="text-teal-400">Location:</strong> Madhyapur Thimi - 05 |  Bhaktapur </p>
              <p><strong className="text-teal-400">Email:</strong> lakeshshrestha88@gmail.com</p>
              <p><strong className="text-teal-400">Phone:</strong> 9808979817</p>
            </div>

            <div className="flex space-x-6 mt-6">
              <a
                href="https://github.com/Lakeshsth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 underline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/lakesh-shrestha-737990292/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-teal-400 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="LakAce"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-teal-400 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="example@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-teal-400 mb-1">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Write your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-teal-400 text-black font-semibold rounded hover:bg-teal-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
