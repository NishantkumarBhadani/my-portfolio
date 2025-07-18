import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';

const experiences = [
  {
    title: 'Java Full Stack Development Training & Internship',
    organization: 'Globsyn Finishing School',
    duration: '3 Months',
    description: [
      'Completed technical training in Java Full Stack with ReactJS',
      'Learned Core Java, ReactJS, Spring Boot, Hibernate',
      'Built full-stack applications with MySQL databases',
      'Deployed apps on local servers'
    ],
    certificateLink: 'https://www.globsynfinishingschool.com/',
  },
  {
    title: 'AI SkillsBuild BootCamp Training',
    organization: 'IBM',
    duration: '6 Hours',
    description: [
      'Completed AI fundamentals training',
      'Certified in "Getting Started with Artificial Intelligence"',
      'Learned prompt engineering and LLM basics',
      'Hands-on with IBM Cloud platform'
    ],
    certificateLink: 'https://www.credly.com/badges/e8320019-25f9-4f96-b9b6-fdb555632f49',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#011627] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            <span className="text-[#2ec4b6]">Experience</span> & Certifications
          </h2>
          <p className="text-gray-400 text-sm">
            My professional journey and credentials
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#112a3a] rounded-lg p-5 border border-gray-700 hover:border-[#2ec4b6] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                <span className="flex items-center gap-1 text-xs text-[#2ec4b6]">
                  <FaCalendarAlt size={10} /> {exp.duration}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <FaBuilding size={12} />
                <span>{exp.organization}</span>
              </div>

              <ul className="space-y-1.5 text-sm text-gray-300 mb-4">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#2ec4b6] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {exp.certificateLink && (
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[#2ec4b6] hover:underline"
                >
                  View Certificate <FaExternalLinkAlt size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;