import React from 'react';
import { motion } from 'framer-motion';
import { FaNodeJs, FaReact, FaDatabase, FaServer, FaMobile, FaLock } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiPython, SiC, SiTailwindcss, SiJsonwebtokens } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={40} /> },
        { name: "Python", icon: <SiPython className="text-blue-500" size={40} /> },
        { name: "C", icon: <SiC className="text-blue-600" size={40} /> },
      ]
    },
    {
      title: "MERN Stack",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={40} /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" size={40} /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" size={40} /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={40} /> },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "RESTful APIs", icon: <FaServer className="text-purple-500" size={40} /> },
        { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-500" size={40} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={40} /> },
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Database Design", icon: <FaDatabase className="text-orange-500" size={40} /> },
        { name: "Android Dev", icon: <FaMobile className="text-green-500" size={40} /> },
        { name: "Security", icon: <FaLock className="text-red-500" size={40} /> },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-primary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Skills</h2>
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6 text-quaternary">{category.title}</h3>
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="skill-card flex flex-col items-center justify-center text-center p-6"
                    variants={itemVariants}
                  >
                    <div className="mb-3">{skill.icon}</div>
                    <h4 className="font-medium">{skill.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;