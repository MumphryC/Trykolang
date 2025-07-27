import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Trophy, Code, Cloud, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { achievements } from "@/lib/portfolio-data";

const iconMap = {
  award: Award,
  trophy: Trophy,
  code: Code,
  cloud: Cloud,
};

export default function AchievementsSection() {
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const displayedAchievements = showAllAchievements ? achievements : achievements.slice(0, 3);

  return (
    <section id="achievements" className="py-20 bg-slate-800/50 relative">
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
            Achievements & Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones and recognitions that mark my journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedAchievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || Award;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-blue-400 font-medium text-sm">{achievement.organization}</p>
                    <p className="text-gray-400 text-sm mb-3">{achievement.date}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">{achievement.description}</p>
                    
                    {achievement.skills && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {achievement.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {achievement.prize && (
                      <div className="mt-3">
                        <span className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                          {achievement.prize}
                        </span>
                      </div>
                    )}
                    
                    {achievement.validUntil && (
                      <div className="mt-3">
                        <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                          Valid Until {achievement.validUntil}
                        </span>
                      </div>
                    )}
                    
                    {achievement.gpa && (
                      <div className="mt-3">
                        <span className="inline-block bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm">
                          GPA: {achievement.gpa}
                        </span>
                      </div>
                    )}
                    
                    {achievement.hours && (
                      <div className="mt-3">
                        <span className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                          {achievement.hours}
                        </span>
                      </div>
                    )}
                    
                    {/* Certificate Image Button */}
                    {achievement.certificateImage && (
                      <div className="mt-4">
                        <button
                          onClick={() => setSelectedCertificate(achievement.certificateImage!)}
                          className="flex items-center gap-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 hover:text-blue-300 rounded-lg transition-all duration-200 text-sm"
                        >
                          <Eye className="w-4 h-4" />
                          View Certificate
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700"
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedCertificate} 
                alt="Certificate" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}

        {/* View All Achievements Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => setShowAllAchievements(!showAllAchievements)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-red-600 text-white px-8 py-3"
          >
            <span>{showAllAchievements ? "View Less Achievements" : "View All Achievements"}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
