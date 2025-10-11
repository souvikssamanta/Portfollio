import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Rocket, Heart, Award, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

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

  const stats = [
    {
      number: "3+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "50+",
      label: "Projects Completed",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      number: "25+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const skills = [
    { name: "React/Next.js", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "UI/UX Design", level: 85, icon: <Palette className="w-5 h-5" /> },
    { name: "Node.js", level: 80, icon: <Code className="w-5 h-5" /> },
    { name: "Tailwind CSS", level: 95, icon: <Palette className="w-5 h-5" /> },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div ref={ref} className="max-w-7xl mx-auto">
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
            About Me
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Crafting Digital
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer and designer creating beautiful, functional web
            applications that solve real-world problems and deliver exceptional
            user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Introduction */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Turning Ideas Into
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Reality
                </span>
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  With over 3 years of experience in web development, I
                  specialize in creating modern, responsive applications that
                  not only look great but also perform exceptionally well.
                </p>
                <p>
                  My approach combines technical expertise with creative design
                  thinking, ensuring every project delivers both functionality
                  and aesthetic appeal.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating
                  intuitive user interfaces that make complex technology
                  accessible to everyone.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Technical
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Skills
                </span>
              </h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                    }
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          delay: 0.8 + index * 0.1,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Touch */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                Beyond Code
              </h4>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community through blogs and tutorials.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
