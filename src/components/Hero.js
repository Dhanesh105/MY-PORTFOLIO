import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  // Animation variants
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 16 }
    },
  };

  const nameArray = "Dhanesh Taninki".split(" ");

  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden pt-[80px] sm:pt-[100px]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-tertiary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 z-10"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-medium mb-2 tracking-wider"
          >
            HELLO, I'M
          </motion.p>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 overflow-hidden flex flex-wrap gap-x-4"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            {nameArray.map((word, index) => (
              <motion.span 
                key={index} 
                variants={wordVariants}
                className="inline-block"
                style={{
                  background: "linear-gradient(to right, #64ffda, #ccd6f6, #64ffda)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 20px rgba(100, 255, 218, 0.2)"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-tertiary mb-6"
          >
            <span className="relative">
              Full Stack Developer
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-secondary/30"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.3 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-tertiary max-w-xl mb-8 leading-relaxed"
          >
            Specializing in Full Stack Development and Web Development. I build efficient, scalable, and user-friendly digital solutions that deliver exceptional experiences.  
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link to="contact" smooth={true} duration={500}>
              <motion.button 
                className="btn relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-secondary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </motion.button>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <motion.button 
                className="btn-outline relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-secondary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            {[
              { icon: <FaGithub size={22} />, url: "https://github.com/Dhanesh105" },
              { icon: <FaLinkedin size={22} />, url: "https://www.linkedin.com/in/dhanesh-taninki-348272325" },
              { icon: <FaEnvelope size={22} />, url: "mailto:dhaneshthaninki@gmail.com" },
              { icon: <FaPhone size={22} />, url: "tel:+919573434598" }
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-tertiary hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-tertiary/10"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative flex justify-center items-center">
            <motion.div 
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-secondary/20 to-tertiary/20 blur-lg"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-secondary/30 via-tertiary/20 to-secondary/30 blur-md"
              animate={{ 
                scale: [1, 1.03, 1],
                rotate: [0, -3, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />
            <motion.img 
              src={require('./DTPF1.jpg')} 
              alt="Dhanesh Taninki" 
              className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full border-4 border-secondary/30 shadow-xl z-10 relative mx-auto"
              loading="lazy"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.p className="text-tertiary text-sm mb-2">Scroll Down</motion.p>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown className="text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;