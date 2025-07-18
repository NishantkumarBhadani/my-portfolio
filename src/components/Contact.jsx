import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Contact = () => {
  const emailAddress = 'kumarbhadanin@gmail.com';
  const linkedinProfile = 'https://www.linkedin.com/in/nishant-kumar-bhadani-483903268';
  const githubProfile = 'https://github.com/NishantBhadani';
  const leetcodeProfile = 'https://leetcode.com/NishantBhadani/';
  const gfgProfile = 'https://auth.geeksforgeeks.org/user/nishantbhadani';

  return (
    <section id="contact" className="bg-[#011627] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center"
        >
          <span className="text-[#2ec4b6]">Contact</span> & <span className="text-[#2ec4b6]">Connect</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* LinkedIn Button */}
          <motion.a
            href={linkedinProfile}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#006097] text-white px-4 py-3 rounded-lg transition-colors"
          >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </motion.a>

          {/* Email Button */}
          <motion.a
            href={`mailto:${emailAddress}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 bg-[#2ec4b6] hover:bg-[#24a899] text-white px-4 py-3 rounded-lg transition-colors"
          >
            <FaEnvelope size={18} />
            <span>Email</span>
          </motion.a>
         
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm text-center mt-6 mb-8"
        >
          I'm currently looking for new opportunities. Feel free to reach out for collaborations or just to connect!
        </motion.p>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-xs mt-12 pt-4 border-t border-gray-800"
        >
          <p>Made with ❤️ by Nishant Kumar Bhadani</p>
          <p className="mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;