import React from 'react';
import { motion } from 'framer-motion';
import { Translation, Partner } from '../types';

interface PartnersProps {
  t: Translation['partners'];
  partners: Partner[];
}

const Partners: React.FC<PartnersProps> = ({ t, partners }) => {
  // Incluir todos os parceiros (tanto partners quanto sponsors)
  const allPartners = partners;
  
  return (
    <section id="partners" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Patrocinadores
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Patrocinadores que nos apoiam na organização de eventos, workshops e projetos que ajudam a impulsionar o desenvolvimento da comunidade.
          </p>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {allPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <a 
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-56 h-32 flex items-center justify-center bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className={`max-w-full max-h-full object-contain transition-all duration-300 transform ${
                      partner.name.toLowerCase().includes('cidadania') ? 'scale-[2]' : 'scale-110'
                    }`}
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;