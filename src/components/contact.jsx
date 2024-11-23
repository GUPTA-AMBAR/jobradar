import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-black text-red-500">
      <h1 className="text-4xl p-4 font-bold tracking-wide">Contact</h1>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-800 h-32 w-full"></div>

      {/* Wrapper */}
      <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
        {/* Social Media */}
        <div className="w-full md:w-1/2 p-5 md:px-0 mx-5">
          <div className="bg-gray-900 border border-red-500 w-full lg:w-1/2 h-full p-5 pt-8">
            <h3 className="text-2xl font-semibold mb-5">My Social Media</h3>
            {/* List */}
            <div className="flex flex-col gap-3">
              <a href="https://github.com/GUPTA-AMBAR" className="flex items-center hover:text-white hover:bg-red-500 p-2">
                <svg
                  fill="currentColor"
                  className="w-6 h-6 m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Github
              </a>
              <a href="https://www.linkedin.com/in/ambargupta8534004080/" className="flex items-center hover:text-white hover:bg-red-500 p-2">
                <svg
                  fill="currentColor"
                  className="w-6 h-6 m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.800781 0 L2.199219 0 C1 0 0 1 0 2.199219 L0 21.800781 C0 23 1 24 2.199219 24 L21.800781 24 C23 24 24 23 24 21.800781 L24 2.199219 C24 1 23 0 21.800781 0 Z M7 20 L3 20 L3 9 L7 9 Z M5 7.699219 C3.800781 7.699219 3 6.898438 3 5.898438 C3 4.800781 3.800781 4 5 4 C6.199219 4 7 4.800781 7 5.800781 C7 6.898438 6.199219 7.699219 5 7.699219 Z M21 20 L17 20 L17 14 C17 12.398438 15.898438 12 15.601563 12 C15.300781 12 14 12.199219 14 14 C14 14.199219 14 20 14 20 L10 20 L10 9 L14 9 L14 10.601563 C14.601563 9.699219 15.601563 9 17.5 9 C19.398438 9 21 10.5 21 14 Z" />
                </svg>
                Linkedin
              </a>
              <a href="https://x.com/home" className="flex items-center hover:text-white hover:bg-red-500 p-2">
                <svg
                fill="currentColor"
                className="w-6 h-6 m-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10.012 10.012 0 01-2.825.775 4.94 4.94 0 002.165-2.723 10.13 10.13 0 01-3.127 1.195 4.902 4.902 0 00-8.348 4.457 13.936 13.936 0 01-10.11-5.13 4.822 4.822 0 001.52 6.573 4.842 4.842 0 01-2.224-.616c-.054 2.28 1.581 4.415 3.95 4.89a4.904 4.904 0 01-2.212.084 4.928 4.928 0 004.6 3.417A9.845 9.845 0 010 19.543 13.924 13.924 0 007.548 22c9.142 0 14.307-7.722 13.995-14.646a10.026 10.026 0 002.41-2.784z" />
                </svg>
                Twitter
                </a>

                <a href="https://www.instagram.com/ambar_29_08/" className="flex items-center hover:text-white hover:bg-red-500 p-2">
                <svg
                fill="currentColor"
                className="w-6 h-6 m-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                   <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.646 2.163 15.266 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.773.13 4.644.396 3.63 1.411 2.615 2.426 2.349 3.555 2.291 4.834 2.233 6.114 2.219 6.523 2.219 12s.014 5.886.072 7.166c.058 1.28.324 2.409 1.339 3.424 1.014 1.014 2.143 1.281 3.423 1.339 1.28.058 1.689.072 7.167.072s5.886-.014 7.166-.072c1.28-.058 2.409-.324 3.424-1.339 1.014-1.014 1.281-2.143 1.339-3.424.058-1.28.072-1.689.072-7.167s-.014-5.886-.072-7.166c-.058-1.28-.324-2.409-1.339-3.424C19.587.396 18.458.13 17.178.072 15.899.014 15.49 0 12 0zm0 5.838a6.162 6.162 0 1 0 6.162 6.162A6.169 6.169 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 3.999-3.999A4.004 4.004 0 0 1 12 16zm6.406-11.845a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                </svg>
                Instagram
                </a>

            </div>
          </div>
        </div>

        {/* Contact Me */}
        <form action="#" className="w-full md:w-1/2 border border-red-500 p-6 bg-gray-900">
          <h2 className="text-2xl pb-3 font-semibold">Send Message</h2>
          <div>
            <div className="flex flex-col mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                rows="4"
                id="message"
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
              ></textarea>
            </div>
          </div>
          <div className="w-full pt-3">
            <button
              type="submit"
              className="w-full bg-gray-900 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
