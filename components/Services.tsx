import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';

interface ServicesProps {
  t: {
    title: string;
    subtitle: string;
  };
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento de Software',
      description: 'Aplicações web e desktop personalizadas.'
    },
    {
      icon: Smartphone,
      title: 'Aplicações Mobile',
      description: 'Apps nativos e híbridos para iOS e Android.'
    },
    {
      icon: Globe,
      title: 'Sites & E-commerce',
      description: 'Websites responsivos e lojas virtuais.'
    },
    {
      icon: Database,
      title: 'Sistemas de Gestão',
      description: 'ERPs e CRMs personalizados.'
    },
    {
      icon: Cloud,
      title: 'Soluções em Nuvem',
      description: 'Deploy e infraestrutura escalável.'
    },
    {
      icon: Shield,
      title: 'Segurança Digital',
      description: 'Proteção e auditoria de sistemas.'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors">
                <service.icon className="w-6 h-6 text-brand-green" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;