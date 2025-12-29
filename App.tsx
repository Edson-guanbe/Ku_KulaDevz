import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Partners from './components/Partners';
import Events from './components/Events';
import Contact from './components/Contact';
import AdminPanel from './components/AdminPanel';
import { translations, teamMembers, projects, partners } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [currentRoute, setCurrentRoute] = useState('home');
  const t = translations[lang];

  useEffect(() => {
    // Verificar a URL para determinar a rota
    const path = window.location.pathname;
    if (path === '/admin' || path.includes('/admin')) {
      setCurrentRoute('admin');
    } else {
      setCurrentRoute('home');
    }

    // Escutar mudanças na URL
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/admin' || path.includes('/admin')) {
        setCurrentRoute('admin');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Se for rota admin, mostrar apenas o painel
  if (currentRoute === 'admin') {
    return <AdminPanel />;
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-green selection:text-white overflow-x-hidden max-w-full">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      
      <main className="overflow-x-hidden max-w-full">
        <Hero t={t.hero} />
        <About t={t.about} stats={t.stats} />
        <Services t={t.services} />
        <Projects t={t.projects} projects={projects} />
        <Team t={t.team} members={teamMembers} />
        <Partners t={t.partners} partners={partners} />
        <Events t={t.events} />
        <Contact t={t.contact} />
      </main>
    </div>
  );
};

export default App;
