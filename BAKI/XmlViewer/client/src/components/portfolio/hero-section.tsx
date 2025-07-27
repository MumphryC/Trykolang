import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Twitter, Coffee, Sparkles, Code, Heart, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = ["Python", "JavaScript", "React", "Flutter", "AWS", "Docker"];

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-400/30"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-green-400 rounded-full"
            />
            <span className="text-green-300 font-medium">Available for opportunities</span>
            <Sparkles className="w-4 h-4 text-green-400" />
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative inline-block"
          >
            <div className="relative w-32 h-32 mx-auto">
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                  padding: "4px",
                  borderRadius: "50%",
                }}
              >
                <div className="w-full h-full bg-slate-900 rounded-full" />
              </motion.div>

              {/* Pulsing Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm z-10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                  alt="Professional Developer" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
              </div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  rotate: 360,
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity },
                }}
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  rotate: -360,
                  x: [0, 10, 0],
                }}
                transition={{
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                  x: { duration: 3, repeat: Infinity },
                }}
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity },
                }}
              >
                <Zap className="w-5 h-5 text-white" />
              </motion.div>

              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Computer
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Engineer
              </span>
            </h1>
            <motion.div
              className="flex items-center gap-2 mt-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Coffee className="w-5 h-5 text-amber-400" />
              <span className="text-gray-400">Powered by coffee & curiosity</span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Fresh Computer Engineering graduate passionate about clean code, creative problem-solving, and user-centered design. 
            <span className="text-blue-400 font-medium"> Building digital experiences</span> that solve real problems and make a meaningful impact.
          </motion.p>

          {/* Skills Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="gradient"
                onClick={scrollToContact}
                className="text-lg px-8 py-4"
              >
                <Mail className="w-5 h-5 mr-3" />
                Let's Connect
                <Rocket className="w-5 h-5 ml-3" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://drive.google.com/file/d/1xX2yY3zZ4wW5vV6uU7tT8sS9rR0qQ1pP/view?usp=sharing', '_blank')}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4 bg-transparent"
              >
                <Download className="w-5 h-5 mr-3" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center pt-8"
          >
            {[
              { Icon: Github, href: "#", color: "from-gray-400 to-gray-600" },
              { Icon: Linkedin, href: "#", color: "from-blue-400 to-blue-600" },
              { Icon: Twitter, href: "#", color: "from-sky-400 to-blue-500" },
            ].map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-14 bg-gradient-to-r ${color} rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300`}
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
