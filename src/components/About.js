import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-tertiary mb-4">
              I am a passionate software developer with expertise in optimizing project efficiency and delivering cutting-edge software solutions. My technical journey has equipped me with a strong foundation in both frontend and backend development.
            </p>
            <p className="text-tertiary mb-4">
              I specialize in the MERN Stack (MongoDB, Express.js, React.js, Node.js), creating robust and scalable web applications. My experience with JWT authentication ensures that the applications I build maintain high security standards.
            </p>
            <p className="text-tertiary">
              My approach to development focuses on writing clean, maintainable code while prioritizing user experience. I'm constantly learning and adapting to new technologies to stay at the forefront of the ever-evolving tech landscape.
            </p>
          </div>
          <div className="bg-tertiary/10 p-6 rounded-lg border border-tertiary/30">
            <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
            <div className="space-y-3">
              <div className="flex">
                <span className="text-secondary font-medium w-24">Name:</span>
                <span>Dhanesh Taninki</span>
              </div>
              <div className="flex">
                <span className="text-secondary font-medium w-24">Email:</span>
                <span>dhanesh@example.com</span>
              </div>
              <div className="flex">
                <span className="text-secondary font-medium w-24">Phone:</span>
                <span>+1234567890</span>
              </div>
              <div className="flex">
                <span className="text-secondary font-medium w-24">Role:</span>
                <span>Software Developer</span>
              </div>
              <div className="flex">
                <span className="text-secondary font-medium w-24">Focus:</span>
                <span>Backend, Web, Android</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;