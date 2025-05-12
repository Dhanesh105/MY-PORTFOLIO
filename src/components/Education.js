import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMedal, FaUniversity, FaBook } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      institution: "Swarnandhra College of Engineering and Technology",
      degree: "Bachelor of Technology",
      field: "Electronics & Communication Engineering",
      grade: "8.6 CGPA",
      period: "2022 - 2025",
      icon: <FaUniversity />
    },
    {
      institution: "Smt B.Seetha Polytechnic",
      degree: "Diploma",
      field: "Electronics & Communication Engineering",
      grade: "96%",
      period: "2019 - 2022",
      icon: <FaGraduationCap />
    },
    {
      institution: "Z.P.High School, Vissakoderu",
      degree: "10th Standard",
      field: "General Education",
      grade: "9.3 CGPA",
      period: "2018 - 2019",
      icon: <FaBook />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-primary/30 to-primary/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-tertiary/5 rounded-full blur-3xl"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-secondary to-secondary/30 rounded-full mx-auto mt-4"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-tertiary max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My academic journey that has shaped my knowledge and skills in technology and engineering.
          </motion.p>
        </div>
        
        <motion.div 
          className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary/30 before:to-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((item, index) => (
            <motion.div 
              key={index}
              className="relative flex items-start md:justify-between md:even:flex-row-reverse group"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-secondary/50 bg-primary shadow-lg shadow-secondary/10 shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2 z-10"
                whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div 
                  className="text-secondary text-xl"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                >
                  {item.icon || <FaGraduationCap />}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-gradient-to-br from-primary/80 to-primary/40 backdrop-blur-sm border border-tertiary/20 shadow-lg hover:shadow-xl transition-all duration-500"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  borderColor: "rgba(100, 255, 218, 0.3)",
                  background: "linear-gradient(to bottom right, rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.7))"
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="flex flex-wrap justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-quaternary group-hover:text-secondary transition-colors duration-300">{item.institution}</h3>
                    <motion.div 
                      className="flex items-center gap-2 text-tertiary bg-tertiary/10 px-3 py-1 rounded-full mt-2 sm:mt-0"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(136, 146, 176, 0.2)" }}
                    >
                      <FaCalendarAlt className="text-secondary" />
                      <time className="text-sm">{item.period}</time>
                    </motion.div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-secondary font-medium text-lg">{item.degree}</span>
                    {item.field && (
                      <motion.span 
                        className="text-tertiary inline-block"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      > 
                        • {item.field}
                      </motion.span>
                    )}
                  </div>
                  
                  <motion.div 
                    className="flex items-center gap-2 text-tertiary bg-tertiary/5 px-3 py-2 rounded-lg inline-block"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(136, 146, 176, 0.1)" }}
                  >
                    <FaMedal className="text-secondary" />
                    <span>Grade: <span className="text-quaternary font-medium">{item.grade}</span></span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;