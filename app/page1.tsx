import React from 'react';
// Lucide icons are available in the execution environment
import { Github, Linkedin, Globe, Menu, X } from "lucide-react";

/**
 * Helper component for project cards.
 * @param {object} props
 * @param {string} props.title - The title of the project.
 * @param {string | JSX.Element} props.description - The description of the project, which may contain JSX elements like <a> tags.
 * @param {string} props.link - The URL link for the project.
 * @param {string=} [props.gifPlaceholderText] - Placeholder text for the visualization area (optional).
 */
const ProjectCard = ({ title, description, link, gifPlaceholderText }) => (
  <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100/50">
    
    {/* Placeholder for image/video content */}
    <div className="relative h-48 sm:h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="text-gray-400 text-sm italic p-4 text-center">
            {gifPlaceholderText || "Project Visualization Placeholder"}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="p-5 md:p-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mt-2 leading-snug text-base">
        {description}
      </p>
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`View ${title}`}
       className="absolute inset-0 z-10">
        {/* Invisible link overlay */}
    </a>
    {/* Hover accent bar */}
    <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
  </div>
);


// Main App Component
const App = () => {
    // State for mobile navigation visibility
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Mimic the font styles with simple Tailwind classes
    const nameFont = "font-serif tracking-tighter"; // For Ms_Madi (handwritten/decorative)
    const heroHeadlineFont = "font-sans tracking-tight"; // For Open_Sans (bold/clean)
    const sectionHeadlineFont = "font-serif"; // For Yrsa (serif/readable)


    const navItems = [
        { name: "ABOUT", href: "#about" },
        { name: "PROJECTS", href: "#projects" },
    ];

    // Function to handle smooth scrolling
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 antialiased">

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
                <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-3">
                    <a href="#" onClick={(e) => scrollToSection(e, '#top')} className={`${nameFont} text-3xl sm:text-4xl font-extrabold text-black cursor-pointer`}>
                        Shiva Surendran
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-full text-black hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase">
                        {navItems.map(item => (
                            <a key={item.name} href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="text-gray-600 hover:text-black transition-colors">
                                {item.name}
                            </a>
                        ))}
                        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}
                           className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg">
                            GET IN TOUCH
                        </a>
                    </nav>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute w-full bg-white shadow-xl py-4 transition-all duration-300 ease-in-out">
                        <nav className="flex flex-col items-center gap-4 text-sm font-semibold uppercase">
                            {navItems.map(item => (
                                <a key={item.name} href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="py-2 text-gray-700 hover:text-black">
                                    {item.name}
                                </a>
                            ))}
                            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}
                               className="w-4/5 text-center bg-indigo-600 text-white px-5 py-2 mt-2 rounded-full hover:bg-indigo-700 transition-colors shadow-md">
                                GET IN TOUCH
                            </a>
                        </nav>
                    </div>
                )}
            </header>


            {/* Hero Section */}
            <section className="relative pt-12 pb-24 sm:pt-20 sm:pb-32 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
                    
                    {/* Left Text and Details */}
                    <div className="w-full lg:w-[55%] pt-10 lg:pt-0">
                        <p className="text-xl sm:text-2xl mb-2 text-gray-700">Hey There, I'm Shiva</p>

                        <h1 className={`${heroHeadlineFont} text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4`}>
                            Frontend Developer,
                            <span className="text-indigo-600 block">Architectural Visualizer</span>
                            & Digital Designer
                        </h1>

                        <p className="text-gray-600 text-lg sm:text-xl mt-6 max-w-md">
                            Currently working as a Software Engineer
                        </p>

                        {/* Arrow */}
                        <div className="mt-8 sm:mt-12 text-4xl sm:text-5xl text-gray-400">
                            <span className="animate-bounce inline-block">↘</span>
                        </div>
                    </div>

                    {/* Right Image Placeholder (Adjusted for mobile stacking and removed negative margin) */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] bg-gray-200 rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-white">
                            <span className="text-gray-500 text-center p-4">Profile Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Overlaps Hero Section via negative margin */}
            <section id="about" className="bg-gray-900 text-white -mt-16 sm:-mt-20 lg:-mt-32 pt-24 pb-20 sm:pt-32 sm:pb-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className={`text-4xl font-bold mb-6 ${sectionHeadlineFont}`}>About Me</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        A **Computer Science graduate** and dedicated **Frontend Developer** focused on building clean,
                        responsive websites that deliver a great user experience. I love solving technical challenges,
                        fueling a commitment to continuous learning and skills growth.
                    </p>
                    <p className="text-lg leading-relaxed">
                        I also have a passion for **architectural modelling** to help people visualize their plans in a 3D perspective.
                        I graduated from Cochin University of Science and Technology (CUSAT), Kochi, in 2025
                        with a B.Tech in Computer Science and Engineering (CGPA: 9.2).
                    </p>
                </div>
            </section>


            {/* Projects Section */}
            <section id="projects" className="bg-white py-20 sm:py-24">
                <div className={"max-w-7xl mx-auto px-4 sm:px-6"}>
                    <h2 className={`text-4xl sm:text-5xl font-extrabold text-left mb-12 ${sectionHeadlineFont}`}>Featured Projects</h2>
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>

                        <ProjectCard
                            title="4F Builders Website"
                            description={<>A responsive corporate website for a construction company. Access the website at <a href="https://4fbuilders.site" className="underline hover:text-indigo-600" target="_blank" rel="noopener noreferrer">4fbuilders.site</a></>}
                            link="https://4fbuilders.site"
                            gifPlaceholderText="Website Screenshot Placeholder: 4F Builders"
                        />

                        <ProjectCard
                            title="Portfolio Website"
                            description="The current website done using Next.js & Tailwind CSS. Designed to showcase my best work and skills with a clean, modern layout."
                            link="#"
                            gifPlaceholderText="Website Screenshot Placeholder: Portfolio"
                        />

                        <ProjectCard
                            title="CareConnect (Flutter)"
                            description={<>A Flutter app for senior citizens, providing monitoring with emergency alerts (fall/noise detection), pill alarms, and a panic button. Access the repository at <a href="https://github.com/careconnect278/" className="underline hover:text-indigo-600" target="_blank" rel="noopener noreferrer">CareConnect GitHub</a></>}
                            link="https://github.com/careconnect278/"
                            gifPlaceholderText="App Demo Placeholder: CareConnect"
                        />

                        <ProjectCard
                            title="3D Sketches"
                            description="A collection of architectural visualization designs, demonstrating proficiency in 3D modelling and design tools."
                            link="#"
                            gifPlaceholderText="3D Model Visualization Placeholder"
                        />

                        <ProjectCard
                            title="HeartGuard Chatbot (IBM WatsonX)"
                            description={<>AI chatbot integrated using <span className="font-semibold">IBM WatsonX Studio</span> for analyzing medical results and predicting heart disease risk — designed for doctors. Repository: <a href="https://github.com/VergilX/ibm-skillsbuild-project" className="underline hover:text-indigo-600" target="_blank" rel="noopener noreferrer">Heartguard</a></>}
                            link="https://github.com/VergilX/ibm-skillsbuild-project"
                            gifPlaceholderText="Chatbot UI Demo Placeholder"
                        />

                        <ProjectCard
                            title="Blogs"
                            description="My personal blog where I write about frontend development, architectural visualization tips, and computer science concepts."
                            link="#"
                            gifPlaceholderText="Blog Post Content Placeholder"
                        />

                    </div>
                </div>
            </section>


            {/* Contact/Footer Section */}
            <footer id="contact" className="bg-[#1e1e1e] text-gray-300 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16">

                    {/* Profile Section */}
                    <div>
                        <h2 className={`text-white font-semibold text-3xl mb-2 ${nameFont}`}>Shiva •शिव</h2>
                        <p className="mt-3 leading-relaxed text-base">
                            A dedicated problem-solver who thrives on learning and building.
                        </p>
                        <p className="text-sm mt-8 opacity-75">© 2025 Shiva. All rights reserved.</p>
                    </div>

                    {/* Links Section */}
                    <div className="order-3 md:order-none">
                        <h3 className="text-white font-semibold mb-4 text-xl sm:text-2xl">Navigation</h3>
                        <ul className="space-y-3 text-base">
                            <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-indigo-400 transition-colors">Projects</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Sketches</a></li>
                        </ul>
                    </div>

                    {/* Social Icons Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-xl sm:text-2xl">Connect</h3>

                        <div className="flex flex-col gap-3 text-lg">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-base hover:text-indigo-400 transition-colors"
                            >
                                <Github size={20} /> Github
                            </a>

                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-base hover:text-indigo-400 transition-colors"
                            >
                                <Linkedin size={20} /> LinkedIn
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-2 text-base hover:text-indigo-400 transition-colors"
                            >
                                <Globe size={20} /> Medium
                            </a>
                        </div>
                    </div>


                </div>
            </footer>
        </main>
    );
}

export default App;
