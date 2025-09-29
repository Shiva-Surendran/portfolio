import {
  Ms_Madi,
  Open_Sans, Yrsa
} from "next/font/google";

import { Github, Linkedin, Globe } from "lucide-react";
import Link from 'next/link';

const madi = Ms_Madi({
  subsets: ['latin'],
  weight: "400",
});

const extrasans = Open_Sans({
  weight: "700",
   subsets: ['latin'], 
});

const sansation = Yrsa({
  weight: "700",
   subsets: ['latin'], 
});

export default function HeroSection() {
  return (
    <main className="min-h-screen w-full bg-white font-sans text-black overflow-x-hidden">

      {/* Navbar */}
      <header className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4">
        <div className={`${madi.className} text-2xl sm:text-3xl md:text-4xl font-bold`}>
          Shiva Surendran
        </div>
        <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg font-bold">
          <Link href="#about" scroll={true} className="hover:underline">ABOUT</Link>
          <a href="#about" className="hover:underline">PROJECTS</a>
          <button className="bg-gray-200 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full hover:bg-black hover:text-white text-sm sm:text-base">
            GET IN TOUCH
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <div className="w-full lg:w-[%] bg-[130%_90%] relative text-center lg:text-left bg-[url('/bg3.jpg')] bg-no-repeat bg-[length:390px_150px] lg:bg-[length:690px_250px] lg:bg-[190%_23%]">
          <p className="text-2xl lg:text-[2.1rem] mb-2">Hey There, I'm Shiva</p>
          <h1 className={`${extrasans.className} text-2xl lg:text-[4.1rem] text-[2rem] font-black leading-tight mb-4`}>
            Frontend Developer,<br />
            Architectural Visualizer<br />
            & Digital Designer
          </h1>
          <div className="hidden md:block mt-12 text-5xl text-gray-400 animate-bounce">
            <span>↘</span>
          </div>
        </div>

        <div className="w-full flex justify-center items-center lg:block lg:w-1/2 lg:mb-[-139px] mt-8 lg:mt-0 relative z-20">
          <img
            src="/image1.png"
            alt="Shiva Surendran"
            className="w-35 h-35 rounded-full lg:rounded-none lg:w-full lg:h-[700px] object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black text-white py-25">
        <div className="px-6 lg:ml-34 lg:mr-10">
          <p className="text-center text-2xl leading-relaxed lg:text-left lg:leading-10">
            A Computer Science graduate and Frontend Developer focused on building clean and responsive websites that deliver a great user experience.
            Love to solve technical challenges and fueling a commitment to continuous learning and skills.
            <br />I also have a passion for architectural modelling to help people visualize their plans to a 3d perspective.
          </p>
          <br />
          <p className="text-center text-2xl leading-relaxed lg:text-left lg:leading-10">
            Graduated from Cochin University of Science and Technology (CUSAT), Kochi, in 2025 with a degree in B.Tech in Computer Science and Engineering (CGPA: 9.2)
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-20 ${sansation.className}">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-left mb-12">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Project Cards */}
            <div className="group relative shadow-black hover:shadow-white bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">
              <div className="relative h-45 overflow-hidden">
                <img
                  src="/4fbuilders.png"
                  alt="4F Builders Website"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  4F Builders Website
                </h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  A responsive corporate website for a construction company. <br />Access the website at <a href="https://4fbuilders.site"><span className="underline">4fbuilders.site</span></a>
                </p>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </div>

           {/* Portfolio Website */}

            <div className="group relative  shadow-black hover:shadow-white bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">

              <div className="relative h-45 overflow-hidden">

                <img

                  src="/portfolio.png"

                  alt="Portfolio Website"

                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">

                  Portfolio Website

                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">

                  The Current website done using next.js & Tailwind CSS, this portfolio is designed to showcase my best work and skills with a clean, modern layout.

                </p>

              </div>

              <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>

            </div>



            {/* CareConnect */}

            <div className="group relative  shadow-black hover:shadow-white bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">

              <div className="relative h-45 overflow-hidden">

                <img

                  src="/cc.gif"

                  alt="CareConnect"

                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">

                  CareConnect

                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">

                  A Flutter app for senior citizen and isolated individuals used for monitoring with emergency alerts like fall detection and

                  noise detection, pill alarms and panic button.

                </p>

                <p className="text-gray-600 mt-3 leading-relaxed">Access it at <a href="https://github.com/careconnect278/"><span className="underline">CareConnect</span></a></p>

              </div>

              <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>

            </div>



            {/* 3D Sketches */}

            <div className="group relative  shadow-black hover:shadow-white bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">

              <div className="relative h-45 overflow-hidden">

                <img

                  src="/model.png"

                  alt="3D Sketches"

                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">

                  3D Sketches

                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">

                  A collection of architectural visualization designs I have made

                </p>

              </div>

              <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>

            </div>



            {/* HeartGuard Chatbot */}

            <div className="group relative  shadow-black hover:shadow-white bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">

              <div className="relative h-45 overflow-hidden">

                <video

                  src="/hg.mp4"

                  autoPlay

                  loop

                  muted

                  playsInline

                  className="w-full h-full object-cover rounded-lg"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">

                  HeartGuard Chatbot

                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">

                  AI chatbot integrated using <span className="font-semibold">IBM WatsonX Studio</span> for analyzing medical results and predicting whether a patient has heart disease — designed for doctors.

                  <br></br>Access it at <a href="https://github.com/VergilX/ibm-skillsbuild-project"><span className="underline">Heartguard</span></a></p>

              </div>

              <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>

            </div>



            <div className="group relative  shadow-black hover:shadow-white bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">

              <div className="relative h-45 overflow-hidden">

                <img

                  src="/const.gif"

                  alt="HeartGuard Chatbot"

                  className=" h-full object-cover transform transition-transform duration-500 group-hover:scale-105"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">

                  Blogs                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">

                  My blog                </p>

              </div>

              <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>

            </div>

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#121212] text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="mb-8 md:mb-0">
            <h2 className="text-white font-semibold text-3xl">Shiva{" "} •ശിവ {" "}•शिव</h2>
            <p className="mt-3 leading-relaxed text-lg">
              A dedicated problem-solver who thrives on learning and building.
            </p>
            <p className="text-lg mt-8">© 2025 Shiva. All rights reserved.</p>
          </div>

          <div className="flex-col gap-10 sm:flex-row sm:gap-6 sm:justify-between md:grid md:grid-cols-2 md:gap-10 md:col-span-2">
            <div className="w-1/2 md:w-full hidden md:block">
              <h3 className="text-white font-semibold mb-4 text-2xl md:text-4xl">Me</h3>
              <ul className="space-y-3 text-lg md:text-xl">
                <li><a href="#projects" className="hover:text-white">Projects</a></li>
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
                <li><a href="#bookmarks" className="hover:text-white">Sketches</a></li>
              </ul>
            </div>

            <div className="w-1/2 md:w-full">
              <h3 className="text-white font-semibold mb-4 text-2xl md:text-4xl">Connect</h3>
              <div className="flex flex-col space-y-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg md:text-xl hover:text-white">
                  <Github /> Github
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg md:text-xl hover:text-white">
                  <Linkedin /> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-2 text-lg md:text-xl hover:text-white">
                  <Globe /> Medium
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
