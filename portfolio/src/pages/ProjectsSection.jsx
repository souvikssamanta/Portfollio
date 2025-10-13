import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  X,
  ArrowRight,
  Eye,
  Code,
  Sparkles,
} from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Riderr",
      description:
        "Riderr a modern car booking website that offers seamless ride scheduling, real-time tracking, and a smooth user experience.",
      fullDescription:
        "Riderr is a modern car booking platform built using the MERN stack, integrated with the Google Maps API for real-time ride tracking and a secure payment gateway for seamless transactions. It enables users to easily book, manage, and track rides through an intuitive and responsive interface. Designed for performance, reliability, and user convenience, Riderr delivers a smooth and secure experience from booking to payment and drop-off.",
      image: "/Riderr.jpeg",
      category: "web",
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express js",
        "MongoDB",
        "GSAP",
        "Razorpay",
        "Git&Github",
      ],
      liveUrl: "https://riderr-1.onrender.com",
      githubUrl: "https://github.com/souvikssamanta/Riderr",
      featured: true,
      color: "from-blue-500 to-cyan-500",
    },

    {
      id: 2,
      title: "NestHub",
      description:
        "NestHub  a smart PG, hotel, and flat booking platform offering hassle-free stays with real-time availability and smooth booking management.",
      fullDescription:
        "NestHub is a modern accommodation booking platform built using the MERN stack, designed to simplify PG, hotel, and flat reservations. It provides real-time availability, secure payment gateway integration, and an intuitive interface for effortless booking and management. With its focus on convenience, scalability, and performance, NestHub ensures users enjoy a smooth and reliable stay-booking experience.",
      image: "/NestHub.jpeg",

      category: "web",
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express js",
        "MongoDB",
        "Shadcn UI",
        "Razorpay",
        "Git&Github",
      ],
      liveUrl: "https://pgfinderr.onrender.com",
      githubUrl: "https://github.com/souvikssamanta/PGFinderr.git",
      featured: true,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 3,
      title: "PortFolio",
      description:
        "Medical imaging analysis platform using deep learning to assist healthcare professionals.",
      fullDescription:
        "MediScan AI provides accurate and fast analysis of medical images. Our AI models help detect anomalies, measure progress, and provide second opinions, supporting healthcare professionals in making critical decisions.",
      image: "/Portfolio.png",
      category: "web",
      technologies: ["React", "Tailwind css", "Framer Motion", "Git&Github"],
      liveUrl: "https://portfollio-nzya.onrender.com",
      githubUrl: "https://github.com/souvikssamanta/Portfollio",
      featured: false,
      color: "from-teal-500 to-blue-500",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
   
    { id: "ai", name: "AI/ML" },
   
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative">
          <img
            src={project.image}
            
          ></img>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute -bottom-6 left-8">
            <div
              className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-white shadow-2xl`}
            >
              <Code className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-4 sm:mt-0">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-600 text-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-800/50 transition-all"
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Key Features
              </h4>
              <ul className="space-y-3">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}
                    ></div>
                    {tech} implementation
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 font-semibold text-lg mb-4 block"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold mb-6">
            Featured
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of my recent work showcasing innovative solutions,
            cutting-edge technologies, and attention to detail.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                  : "border border-gray-600 text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Featured
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div
                className="h-48 object-cover bg-gradient-to-r ob relative overflow-hidden"
              >
                <img  src={project.image} alt="" />
                {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" /> */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(project)}
                    className="bg-black backdrop-blur-sm text-white p-4 rounded-full hover:bg-black transition-colors"
                  >
                    <Eye className="w-6 h-6 text-white " />
                  </motion.button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded-md text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
