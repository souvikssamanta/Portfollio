import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Download, Mouse } from "lucide-react";

const HomePage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [imageRotation, setImageRotation] = useState({ x: 0, y:360 });
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast",
  ];
  const containerRef = useRef(null);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setImageRotation({
      x: y * 20, // Rotate on X axis based on vertical mouse movement
      y: -x * 20, // Rotate on Y axis based on horizontal mouse movement
    });
  };

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl text-purple-400 font-light mb-4"
            >
              Hello, I'm
            </motion.h2>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 mt-10 leading-tight"
            >
              Souvik
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Samanta
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-6 h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="font-light">I'm a </span>
              <span className="text-purple-400 font-semibold ml-2 min-w-[300px]">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Short Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              Crafting digital experiences with clean code and innovative
              design. Passionate about building solutions that make a
              difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 justify-center shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/2ndyear.pdf"
                download="Souvik_Samanta_CV.pdf"
                className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 justify-center hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Animated Picture */}
          <motion.div variants={itemVariants} className="relative">
            {/* Main 3D Container */}
            <motion.div
              animate={{
                rotateX: imageRotation.x,
                rotateY: imageRotation.y,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl border-2 border-purple-500/30 bg-gray-800/20 backdrop-blur-sm overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full blur-2xl"></div>
                </div>

                {/* Profile Image Placeholder - Replace with your image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Abstract Pattern */}
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

                    {/* Placeholder Icon */}
                    <div className="text-white text-center relative z-10">
                      {/* <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                       
                      </div> */}
                     <img src="/souvik2.png" alt="" />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                >
                  ⚡
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                >
                  🚀
                </motion.div>
              </div>

              {/* Outer Glow Effect */}
              <div className="absolute inset-0 rounded-3xl border border-purple-500/20 shadow-2xl shadow-purple-500/10"></div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500 rounded-full blur-xl opacity-30"
            ></motion.div>

            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500 rounded-full blur-xl opacity-30"
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <Mouse className="w-5 h-5" />
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        ></motion.div>
      </div>
    </section>
  );
};

export default HomePage;
