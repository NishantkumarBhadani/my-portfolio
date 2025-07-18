import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-[#011627] to-[#0a2e4a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-[#2ec4b6] opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-60 h-60 rounded-full bg-[#2ec4b6] opacity-10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#2ec4b6]">About</span> Me
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            Hello! I'm <span className="font-semibold text-[#2ec4b6]">Nishant Kumar Bhadani</span>, a final year Computer Science student at MCKV Institute of Engineering. I'm passionate about building innovative solutions and solving complex problems through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Background */}
          <motion.div
            className="bg-[#112a3a] bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#2ec4b6] mb-4">Personal Background</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-[#2ec4b6] mr-3 mt-1">▹</div>
                <span className="text-gray-300">
                  <span className="font-medium text-white">Education:</span> Final year B.Tech in Computer Science at MCKVIE
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-[#2ec4b6] mr-3 mt-1">▹</div>
                <span className="text-gray-300">
                  <span className="font-medium text-white">Passion:</span> Problem solving with 200+ DSA problems solved across platforms
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-[#2ec4b6] mr-3 mt-1">▹</div>
                <span className="text-gray-300">
                  <span className="font-medium text-white">Interests:</span> Open-source contributions, Competitive programming
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            className="bg-[#112a3a] bg-opacity-70 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#2ec4b6] mb-4">Technical Expertise</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-[#2ec4b6] mr-3 mt-1">▹</div>
                <span className="text-gray-300">
                  <span className="font-medium text-white">Full Stack:</span> MERN (MongoDB, Express, React, Node) & Java (Spring Boot, Hibernate)
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-[#2ec4b6] mr-3 mt-1">▹</div>
                <span className="text-gray-300">
                  <span className="font-medium text-white">Machine Learning:</span> Python, TensorFlow, Scikit-learn, Pandas
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-[#2ec4b6] mr-3 mt-1">▹</div>
                <span className="text-gray-300">
                  <span className="font-medium text-white">DevOps:</span>  AWS (Basic)
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-[#2ec4b6] mr-3 mt-1">▹</div>
                <span className="text-gray-300">
                  <span className="font-medium text-white">Other:</span> Data Structures & Algorithms, REST APIs
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block border-2 border-[#2ec4b6] text-[#2ec4b6] hover:bg-[#2ec4b6] hover:text-[#011627] font-bold px-8 py-3 rounded-lg text-lg transition-colors duration-300"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;