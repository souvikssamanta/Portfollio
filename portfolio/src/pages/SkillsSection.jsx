import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code,
  Database,
  Server,
  Wrench,
  Brain,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Cpu,
} from "lucide-react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
  SiRedux,
  SiJavascript,
} from "react-icons/si";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
     
   skills: [
  { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500" />, years: 2 },
  { name: "CSS", level: 95, icon: <FaCss3Alt className="text-blue-500" />, years: 2 },
  { name: "JavaScript", level: 90, icon: <SiJavascript className="text-yellow-400" />, years: 2 },
  { name: "React", level: 95, icon: <FaReact className="text-cyan-400" />, years: 1 },
  { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss className="text-sky-400" />, years: 1 },
  { name: "Framer Motion", level: 88, icon: <SiFramer className="text-pink-500" />, years: 1 },
  { name: "Shadcn UI", level: 92, icon: <SiShadcnui className="text-purple-400" />, years: 1 },
  { name: "Redux", level: 88, icon: <SiRedux className="text-purple-500" />, years: 1 },
]




    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢", years: 4 },
        // { name: "Python", level: 88, icon: "🐍", years: 3 },
        { name: "Express.js", level: 85, icon: "🚂", years: 3 },
        // { name: "FastAPI", level: 80, icon: "⚡", years: 2 },
        // { name: "GraphQL", level: 82, icon: "📊", years: 2 },
        // { name: "REST APIs", level: 92, icon: "🌐", years: 4 },
        // { name: "Microservices", level: 78, icon: "🔗", years: 2 },
        // { name: "Docker", level: 85, icon: "🐳", years: 3 },
      ],
    },
    {
      id: "database",
      name: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 88, icon: "🍃", years: 1 },
        { name: "PostgreSQL", level: 85, icon: "🐘", years: 1},
        { name: "Redis", level: 80, icon: "🔴", years: 1 },
        { name: "MySQL", level: 82, icon: "🐬", years: 1 },
        // { name: "Firebase", level: 78, icon: "🔥", years: 2 },
        // { name: "Elasticsearch", level: 75, icon: "🔍", years: 2 },
        // { name: "SQLite", level: 80, icon: "💡", years: 2 },
        // { name: "Prisma", level: 83, icon: "⚡", years: 2 },
      ],
    },
    {
      id: "ml",
      name: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        // { name: "TensorFlow", level: 80, icon: "🧠", years: 2 },
        // { name: "PyTorch", level: 75, icon: "🔥", years: 2 },
        { name: "Scikit-learn", level: 85, icon: "📚", years: 3 },
        { name: "Pandas", level: 88, icon: "🐼", years: 3 },
        { name: "NumPy", level: 86, icon: "🔢", years: 3 },
        // { name: "OpenCV", level: 70, icon: "👁️", years: 1 },
        // { name: "NLP", level: 72, icon: "💬", years: 2 },
        // { name: "Computer Vision", level: 68, icon: "👀", years: 1 },
      ],
    },
    {
      id: "tools",
      name: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git", level: 90, icon: "📚", years: 4 },
        { name: "AWS", level: 78, icon: "☁️", years: 2 },
        { name: "Docker", level: 85, icon: "🐳", years: 3 },
        { name: "Kubernetes", level: 70, icon: "⚓", years: 1 },
        // { name: "Jenkins", level: 72, icon: "🤖", years: 2 },
        // { name: "Webpack", level: 80, icon: "📦", years: 3 },
         { name: "PostMan", level: 82, icon: "🃏", years: 3 },
        { name: "Figma", level: 75, icon: "🎨", years: 2 },
      ],
    },
  ];

  const activeCategoryData = skillCategories.find(
    (cat) => cat.id === activeCategory
  );

  const SkillCard = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <div>
            <h4 className="font-bold text-white text-lg">{skill.name}</h4>
            <p className="text-gray-400 text-sm">
              {skill.years} year{skill.years !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white font-bold text-lg">{skill.level}%</div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(skill.level / 20)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Skill Level Bar */}
      <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            delay: 0.5 + index * 0.1,
            duration: 1,
            ease: "easeOut",
          }}
          className={`h-3 rounded-full bg-gradient-to-r ${activeCategoryData.color} relative`}
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1 + index * 0.1,
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"
          />
        </motion.div>
      </div>

      {/* Skill Level Label */}
      <div className="flex justify-between text-xs text-gray-400">
        <span>Beginner</span>
        <span>Expert</span>
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
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
            Technical Expertise
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Skills &
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency
            levels across various technologies and tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-6 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-purple-400" />
                Categories
              </h3>
              <div className="space-y-2">
                {skillCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-3 ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        activeCategory === category.id
                          ? "bg-white/20"
                          : "bg-gray-700"
                      }`}
                    >
                      {category.icon}
                    </div>
                    <span className="font-semibold">{category.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* Stats Summary */}
              <div className="mt-8 p-4 bg-gray-700/30 rounded-2xl">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Summary
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Total Skills</span>
                    <span className="text-white font-semibold">40+</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Avg. Proficiency</span>
                    <span className="text-white font-semibold">82%</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Years Experience</span>
                    <span className="text-white font-semibold">4+</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-4 mb-8"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${activeCategoryData.color} rounded-xl flex items-center justify-center text-white`}
                >
                  {activeCategoryData.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {activeCategoryData.name}
                  </h3>
                  <p className="text-gray-400">
                    {activeCategoryData.skills.length} skills • Average
                    proficiency:{" "}
                    {Math.round(
                      activeCategoryData.skills.reduce(
                        (acc, skill) => acc + skill.level,
                        0
                      ) / activeCategoryData.skills.length
                    )}
                    %
                  </p>
                </div>
              </motion.div>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid sm:grid-cols-2 gap-6"
              >
                {activeCategoryData.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid md:grid-cols-3 gap-6 mt-8"
            >
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Fast Learning</h4>
                <p className="text-gray-400 text-sm">
                  Quick to adapt and master new technologies
                </p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Best Practices</h4>
                <p className="text-gray-400 text-sm">
                  Commitment to clean, maintainable code
                </p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Continuous Growth</h4>
                <p className="text-gray-400 text-sm">
                  Always learning and improving skills
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
