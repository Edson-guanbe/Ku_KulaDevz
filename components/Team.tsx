import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, X, Globe } from 'lucide-react';
import { Translation, Member } from '../types';

interface TeamProps {
  t: Translation['team'];
  members: Member[];
}

const Team: React.FC<TeamProps> = ({ t, members }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSocialClick = (url: string | undefined, platform: string, memberName: string) => {
    if (!url || url === "#") {
      const platformText = platform === "Portfólio" ? "portfólio" : platform;
      setModalMessage(`${memberName} ainda não disponibilizou seu ${platformText}. Em breve estará disponível!`);
      setShowModal(true);
      return false;
    }
    return true;
  };



  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-l-4 border-brand-green pl-4">
                {t.title}
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-brand-green/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div className="relative w-40 h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-xl overflow-hidden border-2 border-gray-200 relative z-10 hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={member.imageStyle || { 
                      objectPosition: 'center 25%',
                      transform: 'scale(1.1)'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=10b981&color=fff&size=200`;
                    }}
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-gray-900 font-bold text-lg mb-1">{member.name}</h3>
                <div className="h-px w-full bg-gray-200 my-3"></div>
                <p className="text-gray-700 text-sm font-medium">{member.role}</p>
                
                <div className="flex justify-center gap-3 mt-4">
                  <a 
                    href={member.linkedin || "#"} 
                    target={member.linkedin ? "_blank" : "_self"}
                    rel={member.linkedin ? "noopener noreferrer" : ""}
                    onClick={(e) => {
                      if (!handleSocialClick(member.linkedin, "LinkedIn", member.name)) {
                        e.preventDefault();
                      }
                    }}
                    className="text-gray-400 hover:text-brand-green transition-colors cursor-pointer"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={member.instagram || "#"} 
                    target={member.instagram ? "_blank" : "_self"}
                    rel={member.instagram ? "noopener noreferrer" : ""}
                    onClick={(e) => {
                      if (!handleSocialClick(member.instagram, "Instagram", member.name)) {
                        e.preventDefault();
                      }
                    }}
                    className="text-gray-400 hover:text-brand-green transition-colors cursor-pointer"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href={member.portfolio || "#"} 
                    target={member.portfolio ? "_blank" : "_self"}
                    rel={member.portfolio ? "noopener noreferrer" : ""}
                    onClick={(e) => {
                      if (!handleSocialClick(member.portfolio, "Portfólio", member.name)) {
                        e.preventDefault();
                      }
                    }}
                    className="text-gray-400 hover:text-brand-green transition-colors cursor-pointer"
                    title="Ver Portfólio"
                  >
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Personalizado */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-brand-green rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Link não disponível</h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {modalMessage}
              </p>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors font-medium"
                >
                  Entendi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;
