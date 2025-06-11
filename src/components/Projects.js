import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Task Management System",
      description: "A comprehensive task management application that allows users to create, organize, and track tasks efficiently, built with the MERN stack.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "JWT"],
      features: [
        "User authentication and authorization",
        "Task creation, updating, and deletion",
        "Task categorization and priority setting",
        "Progress tracking and status updates",
        "Responsive design for all devices"
      ],
      github: "https://github.com/Dhanesh105/task-manager",
      demo: "https://task-manager-teal-alpha.vercel.app/"
    },
    {
      title: "Next Wave E-commerce Platform",
      description: "A modern e-commerce platform built with Next.js and deployed on Vercel, featuring a clean UI for product discovery and shopping.",
      technologies: ["Next.js", "React", "Vercel", "Tailwind CSS", "JavaScript", "Responsive Design"],
      features: [
        "Fast static page generation with dynamic capabilities",
        "Responsive product catalog and shopping interface",
        "Optimized for performance with Vercel's Edge Network",
        "Modern UI with smooth animations and transitions",
        "Mobile-first shopping experience"
      ],
      github: "https://github.com/Dhanesh105/NEXT-WAVE",
      demo: "https://next-wave-ji3a.vercel.app/"
    },
    {
      title: "AI-based Recruitment Platform",
      description: "An intelligent recruitment platform designed to automate candidate screening and matching using AI algorithms, built with the MERN stack.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Machine Learning", "Natural Language Processing", "Redux"],
      features: [
        "AI-powered resume parsing and candidate matching",
        "Automated skill assessment and scoring",
        "Intelligent interview scheduling system",
        "Candidate recommendation engine",
        "Analytics dashboard for recruitment metrics"
      ],
      github: "https://github.com/Dhanesh105/Talent-match",
      demo: "https://talent-match-eosin.vercel.app/"
    },
    {
      title: "Shopping Application",
      description: "A full-stack e-commerce application built with the MERN Stack featuring secure user authentication, dynamic product catalog, shopping cart functionality, and order management.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Tailwind CSS"],
      features: [
        "Secure user authentication and authorization",
        "Dynamic product catalog with search and filter",
        "Shopping cart and checkout process",
        "User profile and order history",
        "Admin dashboard for product management"
      ],
      github: "https://github.com/Dhanesh105/Luxe-Shop",
      demo: "https://luxe-shop-lac.vercel.app/"
    },
    {
      title: "JWT Authentication System",
      description: "A robust authentication system using JSON Web Tokens (JWT) for secure user authentication and authorization in web applications.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
      features: [
        "Secure user registration and login",
        "Password hashing with bcrypt",
        "JWT token generation and validation",
        "Role-based access control",
        "Token refresh mechanism"
      ],
      github: "https://github.com/Dhanesh105/User-Auth-JWT",
      demo: "https://secure-auth-sigma.vercel.app/"
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Projects</h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card flex flex-col h-full"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-3 text-secondary">{project.title}</h3>
              <p className="text-tertiary mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-tertiary">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-sm bg-tertiary/20 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:underline"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
