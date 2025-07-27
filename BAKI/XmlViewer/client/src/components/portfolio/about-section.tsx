import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { skillCategories, education, experience } from "@/lib/portfolio-data";

export default function AboutSection() {
  const [showAllEducation, setShowAllEducation] = useState(false);
  const [showAllExperience, setShowAllExperience] = useState(false);

  return (
    <section id="about" className="py-20 bg-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate full-stack developer with 3+ years of experience building 
                web applications and mobile solutions. I love turning complex problems into 
                simple, beautiful designs.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-slate-700/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-medium text-blue-400">{category.category}</h4>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-200">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-white">Education</h3>
            {education.length > 1 && (
              <button
                onClick={() => setShowAllEducation(!showAllEducation)}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-blue-500/10"
              >
                <span className="text-sm font-medium">{showAllEducation ? "View Less" : "View More"}</span>
                <motion.div
                  animate={{ rotate: showAllEducation ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
            )}
          </div>
          
          <div className="space-y-6">
            {/* Featured Education Item */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <img 
                  src={education[0].logo} 
                  alt={`${education[0].school} logo`} 
                  className="w-16 h-16 rounded-lg object-cover bg-slate-600" 
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white">{education[0].degree}</h4>
                  <p className="text-blue-400 font-medium">{education[0].school}</p>
                  <p className="text-gray-400 text-sm">{education[0].period}</p>
                  {education[0].achievements && (
                    <div className="mt-2 flex gap-2">
                      {education[0].achievements.map((achievement, index) => (
                        <span key={index} className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            
            {/* Additional Education Items */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: showAllEducation ? 1 : 0,
                height: showAllEducation ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="space-y-6 overflow-hidden"
            >
              {education.slice(1).map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.school} logo`} 
                      className="w-16 h-16 rounded-lg object-cover bg-slate-600" 
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <p className="text-blue-400 font-medium">{edu.school}</p>
                      <p className="text-gray-400 text-sm">{edu.period}</p>
                      {edu.achievements && (
                        <div className="mt-2 flex gap-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <span 
                              key={achIndex} 
                              className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-white">Experience</h3>
            {experience.length > 1 && (
              <button
                onClick={() => setShowAllExperience(!showAllExperience)}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-blue-500/10"
              >
                <span className="text-sm font-medium">{showAllExperience ? "View Less" : "View More"}</span>
                <motion.div
                  animate={{ rotate: showAllExperience ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
            )}
          </div>
          
          <div className="space-y-6">
            {/* Featured Experience Item */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <img 
                  src={experience[0].logo} 
                  alt={`${experience[0].company} logo`} 
                  className="w-16 h-16 rounded-lg object-cover bg-slate-600" 
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white">{experience[0].position}</h4>
                  <p className="text-blue-400 font-medium">{experience[0].company}</p>
                  <p className="text-gray-400 text-sm">{experience[0].period}</p>
                  <div className="mt-2">
                    <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {experience[0].type}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Additional Experience Items */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: showAllExperience ? 1 : 0,
                height: showAllExperience ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="space-y-6 overflow-hidden"
            >
              {experience.slice(1).map((exp, index) => (
                <div
                  key={index}
                  className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-16 h-16 rounded-lg object-cover bg-slate-600" 
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{exp.position}</h4>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                      <div className="mt-2">
                        <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
