import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import ContactForm from "./ContactForm.jsx";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  CheckCircle,
  Clock,
  ArrowUp,
} from "lucide-react";


const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "souvikss2004@.com",
      link: "mailto:hello@portfolio.com",
      color: "from-red-500 to-pink-500",
      description: "Send me an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "8927420376",
      link: "tel:+15551234567",
      color: "from-green-500 to-emerald-500",
      description: "Mon - Fri from 9am to 6pm",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Belur, Howrah, WestBengal",
      link: "https://maps.google.com",
      color: "from-blue-500 to-cyan-500",
      description: "Available for remote work",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Social",
      value: "Connect with me",
      link: "#social",
      color: "from-purple-500 to-pink-500",
      description: "Let's get connected",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/souvikssamanta",
      color: "hover:bg-gray-700",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/souvik2004",
      color: "hover:bg-blue-600",
    },
    // {
    //   icon: <Twitter className="w-5 h-5" />,
    //   name: "Twitter",
    //   url: "https://twitter.com/username",
    //   color: "hover:bg-sky-500",
    // },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Replace these with your actual EmailJS credentials
    const serviceID = import.meta.env.VITE_SERVICEID
    const templateID = import.meta.env.VITE_USERID
    const userID = import.meta.env.VITE_TEMPLATEID; // NOT secret key!

    await emailjs.send(serviceID, templateID, formData, userID);

    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Reset after delay
    setTimeout(() => setIsSubmitted(false), 3000);
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send message. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};
 const scrollToTop = () => {
   window.scrollTo({ top: 0, behavior: "smooth" });
 };

  return (
    <section
      id="contact"
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
            Get In Touch
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's Work
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together. I'm always open to new
            opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1 space-y-6"
          >
            {/* Contact Methods */}
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                variants={itemVariants}
                href={method.link}
                whileHover={{ y: -5, scale: 1.02 }}
                className="block bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg">
                      {method.title}
                    </h3>
                    <p className="text-gray-300">{method.value}</p>
                    <p className="text-gray-400 text-sm mt-1">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
            >
              <h3 className="font-bold text-white text-lg mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">
                  Available for work
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Currently accepting new projects for Q1 2025. Let's schedule a
                call to discuss your requirements.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <ContactForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              isSubmitted={isSubmitted}
              itemVariants={itemVariants}
            />
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            I typically respond to emails within 24 hours. For urgent matters,
            feel free to reach out via phone or social media.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex bg-green-500 text-black rounded-2xl mx-auto mt-10 px-5 py-3 items-center gap-2 "
          >
            Back to Top
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
