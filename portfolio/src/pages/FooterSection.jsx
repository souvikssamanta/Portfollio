import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Calendar,
  Code,
  Coffee,
} from "lucide-react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "API Development",
    "Cloud Solutions",
    "Technical Consulting",
  ];

  
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-gray-800">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 

        {/* Bottom Footer */}
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Portfolio. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="w-4 h-4 text-pink-500 fill-current" />
              </motion.div>
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-yellow-500" />
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm">
              <motion.a
                href="/privacy"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group"
              >
                Back to Top
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Fun Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-6"
          >
            <div className="inline-flex items-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Code className="w-3 h-3" />
                <span>Built with React & Tailwind</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-5"></div>
      </div>
    </footer>
  );
};

export default FooterSection;
