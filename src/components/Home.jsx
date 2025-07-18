import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 lg:px-12 bg-[#011627] text-white pt-20 md:pt-0 relative overflow-hidden"
    >
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-[#2ec4b6] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#2ec4b6] opacity-10 blur-3xl"></div>
      </div>

   
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
       
        <motion.div 
          className="text-center md:text-left md:w-1/2 order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="font-bold text-[#2ec4b6] mb-4 text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi 👋, I'm
          </motion.p>
          
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Nishant Kumar Bhadani
          </motion.h1>

          <motion.div
            className="h-16 sm:h-20 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer..',
                3000,
                'Machine Learning Enthusiast..',
                3000,
                'React.js & Node.js Developer..',
                3000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2ec4b6]"
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="/Resume_new.pdf" 
              download="Nishant_Kumar_Bhadani-Resume.pdf" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-[#2ec4b6] hover:bg-[#1da89a] text-[#011627] font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <FiDownload className="text-lg" />
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 border-2 border-[#2ec4b6] text-[#2ec4b6] hover:bg-[#2ec4b6] hover:text-[#011627] font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <FiMail className="text-lg" />
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

       
        <motion.div 
          className="md:w-1/2 flex flex-col items-center order-1 md:order-2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-6">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8
              }}
              className="relative"
            >
              <img 
                src="/profile.jpeg"
                alt="Nishant Kumar Bhadani"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-[#2ec4b6] shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent animate-pulse shadow-neon">
                <style jsx>{`
                  .shadow-neon {
                    box-shadow: 0 0 20px #2ec4b6, 0 0 40px rgba(46, 196, 182, 0.5);
                    animation: glow 2s infinite alternate;
                  }
                  @keyframes glow {
                    from {
                      box-shadow: 0 0 15px #2ec4b6, 0 0 30px rgba(46, 196, 182, 0.5);
                    }
                    to {
                      box-shadow: 0 0 25px #2ec4b6, 0 0 50px rgba(46, 196, 182, 0.7);
                    }
                  }
                `}</style>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="https://www.linkedin.com/in/nishant-kumar-bhadani-483903268" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/NishantBhadani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            {/* <a 
              href="https://leetcode.com/NishantBhadani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#f89f1b] transition-colors"
              aria-label="LeetCode"
            >
              <FaLeetcode size={24} />
            </a> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;