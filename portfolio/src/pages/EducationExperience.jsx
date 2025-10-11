import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";

const EducationExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const educationData = [
    {
      id: 1,
      icon: <GraduationCap className="w-6 h-6" />,
      degree: "BTECH in Computer Science",
      institution: "Mckv Institute of Engineering",
      period: "2023 - 2027",
      location: "Howrah,WestBengal",
      description:
        "Specialized in DSA,Operating System,DBMS and Web development.",
      achievements: [
        "GPA: 9.5/10",
        "Research Assistant in AI Lab",
        "Built 2 Live Projects",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      icon: <GraduationCap className="w-6 h-6" />,
      degree: "Higher Secondary Education",
      institution: "Saharda Kalipada Vidyapith",
      period: "2021 - 2023",
      location: "Saharda,Pingla,Paschim Medinipur",
      description: "Focused on Physics Chemistry Math and Biology",
      achievements: [
        "Marks: 451/500",
        "2nd Highest Scorer of My School",
        "Awarded with Silver Medal",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      id: 3,
      icon: <GraduationCap className="w-6 h-6" />,
      degree: "Secondary Education",
      institution: "Saharda Kalipada Vidyapith",
      period: "2015 - 2021",
      location: "Saharda,Pingla,Paschim Medinipur",
      description:
        "STEM-focused curriculum with emphasis science and mathematics.",
      achievements: [
        "Marks: 672/700",
        " Highest Scorer of My School",
        "Awarded with Gold Medal",
      ],
      color: "from-green-500 to-blue-500",
    },
  ];

  const experienceData = [
    {
      id: 1,
      icon: <Briefcase className="w-6 h-6" />,
      position: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Lead development of enterprise SaaS applications using React, Node.js, and cloud technologies.",
      achievements: [
        "Led team of 8 developers",
        "Reduced load times by 60%",
        "Mentored junior developers",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 2,
      icon: <Briefcase className="w-6 h-6" />,
      position: "Frontend Developer",
      company: "StartUp Labs",
      period: "2020 - 2022",
      location: "Remote",
      description:
        "Developed responsive web applications and design systems for various client projects.",
      achievements: [
        "Built 15+ production apps",
        "Improved UX scores by 40%",
        "Implemented CI/CD pipeline",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 3,
      icon: <Briefcase className="w-6 h-6" />,
      position: "Software Engineer Intern",
      company: "Google",
      period: "Summer 2019",
      location: "Mountain View, CA",
      description:
        "Worked on Google Cloud Platform team, contributing to infrastructure and API development.",
      achievements: [
        "Optimized API response times",
        "Received return offer",
        "Contributed to open source",
      ],
      color: "from-green-500 to-teal-500",
    },
  ];

  const TimelineItem = ({ item, isEducation, index }) => (
    <motion.div variants={itemVariants} className="flex gap-8 group">
      {/* Timeline Line and Dot */}
      <div className="flex flex-col items-center">
        {/* Connection Line */}
        <div className="w-0.5 bg-gray-700 h-6 group-first:h-12"></div>

        {/* Animated Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            delay: 0.8 + index * 0.15,
            type: "spring",
            stiffness: 200,
          }}
          className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg z-10 relative`}
        >
          {item.icon}
        </motion.div>

        {/* Connection Line */}
        <div className="w-0.5 bg-gray-700 flex-1"></div>
      </div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="flex-1 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-8 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/10"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">
              {isEducation ? item.degree : item.position}
            </h3>
            <p className="text-lg text-purple-400 font-semibold mb-2">
              {isEducation ? item.institution : item.company}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 1 + index * 0.15 }}
            className="flex items-center gap-2 text-gray-400 text-sm mt-2 sm:mt-0"
          >
            <Calendar className="w-4 h-4" />
            <span>{item.period}</span>
          </motion.div>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>{item.location}</span>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

        {/* Achievements */}
        <div className="space-y-2">
          {item.achievements.map((achievement, achievementIndex) => (
            <motion.div
              key={achievementIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{
                delay: 1.2 + index * 0.15 + achievementIndex * 0.1,
              }}
              className="flex items-center gap-3 text-sm text-gray-300"
            >
              <div
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
              ></div>
              <span>{achievement}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="education-experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 font-semibold text-lg mb-4 block"
          >
            Journey
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Education &
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My Educational journey through learning and project experience that
            shaped my skills and expertise.
          </p>
        </motion.div>

        <div className=" flex justify-center gap-16">
          {/* Education Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="sticky top-8">
              <motion.h3
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                Education
              </motion.h3>

              <div className="space-y-2">
                {educationData.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    isEducation={true}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Column */}
          {/* <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="sticky top-8">
              <motion.h3
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                Experience
              </motion.h3>

              <div className="space-y-2">
                {experienceData.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    isEducation={false}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div> */}
        </div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Download Full Resume
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default EducationExperience;
