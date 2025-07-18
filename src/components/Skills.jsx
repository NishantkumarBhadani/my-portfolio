import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', image: '/skills/html.png' },
  { name: 'CSS', image: '/skills/css.png' },
  { name: 'JavaScript', image: '/skills/js.png' },
  { name: 'TailwindCSS', image: '/skills/csst.png' },
  { name: 'ReactJS', image: '/skills/react.png' },
  { name: 'NodeJS', image: '/skills/node.png' },
  { name: 'MongoDB', image: '/skills/mongodb.png' },
  { name: 'Spring Boot', image: '/skills/springboot.png' },
  { name: 'Git', image: '/skills/git.png' },
  { name: 'GitHub', image: '/skills/github.png' },
  { name: 'Java', image: '/skills/java.png' },
  { name: 'C', image: '/skills/c.png' },
  { name: 'Python', image: '/skills/python.png' },
  { name: 'MySQL', image: '/skills/mysql.png' },
  { name: 'Jupyter', image: '/skills/jupyter.png' },
  { name: 'VS Code', image: '/skills/vscode.png' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#011627] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center"
        >
          <span className="text-[#2ec4b6]">Skills</span> & Technologies
        </motion.h2>

        <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 sm:gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.05
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-full flex flex-col items-center">
                {/* Circular container */}
                <motion.div
                  className="relative aspect-square w-full max-w-[70px] xs:max-w-[80px] sm:w-20 md:w-22 rounded-full bg-[#011627] border-2 border-gray-800 flex items-center justify-center"
                  whileHover={{
                    borderColor: "#2ec4b6",
                    boxShadow: "0 0 15px rgba(46, 196, 182, 0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Skill image */}
                  <motion.div 
                    className="w-4/5 h-4/5 rounded-full overflow-hidden flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-full h-full object-contain p-1"
                    />
                  </motion.div>
                </motion.div>
                
                {/* Skill name - now properly centered */}
                <motion.span 
                  className="block mt-2 text-xs sm:text-[13px] text-white font-medium text-center w-full px-1"
                  whileHover={{ color: "#2ec4b6" }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textAlign: 'center',
                    lineHeight: '1.2'
                  }}
                >
                  {skill.name}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background floating elements */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute left-10 top-1/4 text-[#2ec4b6] text-9xl opacity-10 pointer-events-none"
        >
          &lt;/&gt;
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;