import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const projects = [
  {
    title: "Spicy Touch",
    description: "A restaurant web app using MERN stack with dynamic menu browsing, online ordering, secure login, and admin dashboard.",
    image: "/projects/resto.png",
    github: "https://github.com/NishantkumarBhadani/restaurant-web-app",
    demo: "https://spicytouch.onrender.com/",
    tags: ["MERN", "React", "Node.js", "MongoDB"]
  },
  {
    title: "ServiceHub",
    description: "Service management platform with React frontend and Spring Boot backend for handling service requests.",
    image: "/projects/service.png",
    github: "https://github.com/NishantkumarBhadani/service-provider-webapp",
    demo: "https://servicehub2025.netlify.app/",
    tags: ["React", "Spring Boot", "Java"]
  },
  {
    title: "ChatEase",
    description: "NLP-powered chatbot with intent recognition and real-time interactions using Streamlit.",
    image: "/projects/chat.png",
    github: "https://github.com/NishantkumarBhadani/Chatbot-using-NLP-",
    demo: "https://chatbot2025.streamlit.app/",
    tags: ["Python", "NLP", "Machine Learning"]
  },
  {
    title: "Amazon Clone",
    description: "Responsive Amazon homepage replica built with pure HTML/CSS, matching the original design.",
    image: "/projects/amazon.png",
    github: "https://github.com/NishantkumarBhadani/amazone-clone",
    demo: "",
    tags: ["HTML", "CSS", "Frontend"]
  },
  {
    title: "Samira",
    description: "Weather application displaying real-time data with clean, responsive interface.",
    image: "/projects/weather.png",
    github: "https://github.com/NishantkumarBhadani/weather_app",
    demo: "",
    tags: ["JavaScript", "API", "Frontend"]
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section 
      id="projects" 
      className="relative bg-gradient-to-b from-[#011627] to-[#0b1d2a] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#2ec4b6] opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-[#2ec4b6] opacity-5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#2ec4b6]">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here are some of my recent works showcasing my skills and expertise
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-[#112a3a] bg-opacity-80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-[#2ec4b6] transition-all duration-300">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full p-4 rounded-4xl object-cover "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    {/* <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-[#2ec4b6] bg-opacity-20 text-[#2ec4b6] rounded">
                          {tag}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#2ec4b6] rounded-lg hover:bg-[#25a699] transition"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 text-base font-medium text-white bg-[#2ec4b6] rounded-lg hover:bg-[#25a699] transition shadow-lg"
            >
              {showAll ? (
                <>
                  <FaChevronUp /> Show Less
                </>
              ) : (
                <>
                  <FaChevronDown /> Show More
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Project;