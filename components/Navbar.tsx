import React, { useState, useEffect } from 'react';
    import { Menu, X, Globe, Terminal, Home, Info, Lightbulb, Users, Handshake, Heart, Mail } from 'lucide-react';
    import { Language, Translation } from '../types';
    import { motion, AnimatePresence } from 'framer-motion';

    interface NavbarProps {
      lang: Language;
      setLang: (lang: Language) => void;
      t: Translation['nav'];
    }

    const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const [activeSection, setActiveSection] = useState('home');

      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
          
          // Detect active section
          const sections = ['home', 'about', 'services', 'solutions', 'team', 'partners', 'contact'];
          const scrollPosition = window.scrollY + 100;
          
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const offsetBottom = offsetTop + element.offsetHeight;
              
              if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                setActiveSection(section);
                break;
              }
            }
          }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const navLinks = [
        { href: '#home', label: t.home, icon: Home, id: 'home' },
        { href: '#about', label: t.about, icon: Info, id: 'about' },
        { href: '#services', label: t.services, icon: Lightbulb, id: 'services' },
        { href: '#solutions', label: t.projects, icon: Lightbulb, id: 'solutions' },
        { href: '#team', label: t.team, icon: Users, id: 'team' },
        { href: '#partners', label: t.partners, icon: Handshake, id: 'partners' },
        { href: '#contact', label: t.contact, icon: Mail, id: 'contact' },
      ];

      return (
        <nav
          className={`fixed w-full z-50 transition-all duration-300 overflow-hidden ${
            scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 w-full">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                <div className={`relative transition-all duration-300 ${scrolled ? 'w-20 h-16' : 'w-20 h-14'}`}>
                  <img 
                    src="/images/ku_kulaDevzlogopro.jpg" 
                    alt="Ku_KulaDevz Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                    <span className={`font-mono font-bold tracking-wider transition-all duration-300 ${
                      scrolled ? 'text-xl text-gray-900' : 'text-lg text-white'
                    }`}>
                      KU_KULA<span className="text-brand-green">DEVZ</span>
                    </span>
                    <span className={`text-[10px] uppercase tracking-widest hidden sm:block transition-colors duration-300 ${
                      scrolled ? 'text-gray-500' : 'text-white/70'
                    }`}>Digital Solutions</span>
                </div>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          isActive 
                            ? scrolled 
                              ? 'text-brand-green font-semibold' 
                              : 'text-brand-green font-semibold'
                            : scrolled
                              ? 'text-gray-600 hover:text-brand-green'
                              : 'text-white/90 hover:text-brand-green'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.label}
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-green rounded-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.a>
                    );
                  })}
                  <button
                    onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
                    className={`flex items-center gap-1 px-3 py-2 border rounded-full text-xs transition-all duration-300 ${
                      scrolled 
                        ? 'text-gray-500 hover:text-gray-900 border-gray-300'
                        : 'text-white/70 hover:text-white border-white/30 hover:border-white/50'
                    }`}
                  >
                    <Globe size={14} />
                    {lang.toUpperCase()}
                  </button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex-shrink-0">
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-10 h-10 rounded-lg bg-gray-100 hover:bg-brand-green/20 border border-gray-300 hover:border-brand-green/30 flex items-center justify-center text-gray-600 hover:text-brand-green transition-all duration-200"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
            )}
          </AnimatePresence>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-2xl relative z-50 w-full overflow-hidden"
              >
                <div className="px-4 pt-4 pb-6 space-y-2 max-w-full">
                  {navLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    const isActive = activeSection === link.id;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 border relative overflow-hidden ${
                          isActive 
                            ? 'text-brand-green bg-brand-green/10 border-brand-green/30' 
                            : 'text-gray-700 hover:text-gray-900 hover:bg-brand-green/10 border-transparent hover:border-brand-green/20'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 relative z-10 ${
                          isActive 
                            ? 'bg-brand-green/20' 
                            : 'bg-gray-100 group-hover:bg-brand-green/20'
                        }`}>
                          <IconComponent size={18} className={`transition-colors duration-200 ${
                            isActive 
                              ? 'text-brand-green' 
                              : 'text-gray-600 group-hover:text-brand-green'
                          }`} />
                        </div>
                        <span className={`text-base font-medium relative z-10 ${
                          isActive ? 'font-semibold' : ''
                        }`}>{link.label}</span>
                        
                        {/* Hover effect background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        
                        {/* Active/Hover accent line */}
                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-brand-green transition-all duration-200 rounded-r ${
                          isActive 
                            ? 'h-8' 
                            : 'h-0 group-hover:h-8'
                        }`} />
                      </motion.a>
                    );
                  })}
                  
                  {/* Language Switcher */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="pt-4 mt-4 border-t border-gray-200"
                  >
                    <button
                      onClick={() => {
                          setLang(lang === 'pt' ? 'en' : 'pt');
                          setIsOpen(false);
                      }}
                      className="group flex items-center gap-4 px-4 py-3 rounded-xl text-brand-green hover:text-gray-900 hover:bg-brand-green/10 transition-all duration-200 border border-brand-green/20 hover:border-brand-green/40 w-full"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-green/20 group-hover:bg-brand-green/30 flex items-center justify-center transition-colors duration-200">
                        <Globe size={18} className="text-brand-green group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-base font-medium">
                          {lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-gray-600">
                          {lang.toUpperCase()}
                        </span>
                      </div>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      );
    };

    export default Navbar;
