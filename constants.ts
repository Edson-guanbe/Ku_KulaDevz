import { Member, Project, Translation, Partner } from './types';

export const translations: Record<string, Translation> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Quem Somos',
      projects: 'Soluções',
      team: 'Equipa',
      events: 'Eventos',
      partners: 'Parceiros',
      sponsors: 'Patrocinadores',
      contact: 'Contato',
    },
    hero: {
      title: 'Tecnologia que transforma',
      subtitle: 'Grupo de estudantes de Engenharia Informática & Tecnologia da UMUM desenvolvendo soluções reais para Moçambique.',
      ctaPrimary: 'Ver Projetos',
      ctaSecondary: 'Conhecer a Equipa',
    },
    about: {
      title: 'Quem Somos',
      description: 'A Ku Kula Devz é um grupo de estudantes da UMUM dedicado a desenvolver soluções digitais inovadoras para problemas reais em Moçambique.',
      mission: 'Desenvolver tecnologia acessível e impactante.',
      vision: 'Ser referência em inovação tecnológica universitária em Moçambique.',
      values: 'Inovação, Colaboração, Impacto Social, Excelência.',
    },
    projects: {
      title: 'Nossas Soluções',
      viewDetails: 'Ver Detalhes',
    },
    partners: {
      title: 'Nossos Parceiros',
      description: 'Organizações que colaboram connosco para criar impacto positivo.',
    },
    sponsors: {
      title: 'Patrocinadores',
      description: 'Empresas que apoiam nossa missão de transformar Moçambique através da tecnologia.',
    },
    stats: {
      farmers: 'Agricultores Beneficiados',
      members: 'Membros Ativos',
      projects: 'Projetos Desenvolvidos',
    },
    team: {
      title: 'Nossa Equipa',
      role: 'Função',
    },
    events: {
      title: 'Galeria & Eventos',
    },
    contact: {
      title: 'Fale Conosco',
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      projects: 'Solutions',
      team: 'Team',
      events: 'Events',
      partners: 'Partners',
      sponsors: 'Sponsors',
      contact: 'Contact',
    },
    hero: {
      title: 'Technology that transforms',
      subtitle: 'A group of Computer Engineering & Technology students from UMUM developing real solutions for Mozambique.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Meet the Team',
    },
    about: {
      title: 'About Us',
      description: 'Ku Kula Devz is a group of UMUM students dedicated to developing innovative digital solutions for real-world problems in Mozambique.',
      mission: 'Develop accessible and impactful technology.',
      vision: 'To be a reference in university technological innovation in Mozambique.',
      values: 'Innovation, Collaboration, Social Impact, Excellence.',
    },
    projects: {
      title: 'Our Solutions',
      viewDetails: 'View Details',
    },
    partners: {
      title: 'Our Partners',
      description: 'Organizations that collaborate with us to create positive impact.',
    },
    sponsors: {
      title: 'Sponsors',
      description: 'Companies that support our mission to transform Mozambique through technology.',
    },
    stats: {
      farmers: 'Farmers Impacted',
      members: 'Active Members',
      projects: 'Projects Developed',
    },
    team: {
      title: 'Our Team',
      role: 'Role',
    },
    events: {
      title: 'Gallery & Events',
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
    },
  },
};

export const teamMembers: Member[] = [
  {
    name: "Anselmo Dora Bistiro",
    year: "2º Ano",
    role: "Programador Sênior / Segurança / Web",
    bio: "Especialista em segurança da informação e arquitetura web robusta.",
    image: "/images/team/anselmoDora.jpg",
    portfolio: "https://anselmo-dora-bistiro.vercel.app/",
    linkedin: "https://mz.linkedin.com/in/anselmo-dora-bistiro-gulane-a68505390",
    instagram: "https://www.instagram.com/anselmo.offcial_/",
  },
  {
    name: "André Augusto Júnior",
    year: "2º Ano",
    role: "Desenvolvimento Web",
    bio: "Focado em criar experiências web modernas e responsivas.",
    image: "/images/team/andre-augusto-junior.jpg",
    linkedin: "#",
    instagram: "#",
    portfolio: "#",
  },
  {
    name: "Anselma Tiburcio",
    year: "3º Ano",
    role: "Front-end / Mobile",
    bio: "Paixão por UI/UX e desenvolvimento de aplicações móveis intuitivas.",
    image: "/images/team/anselma-tiburcio.jpg",
    linkedin: "https://mz.linkedin.com/in/anselma-tiburcio-73165930b",
    instagram: "https://www.instagram.com/anselmatiburcio/",
    portfolio: "#",
  },
  {
    name: "Aquilivio Maria",
    year: "3º Ano",
    role: "Redes / Infraestrutura",
    bio: "Garante que nossas soluções estejam sempre conectadas e seguras.",
    image: "/images/team/aquilivio-maria.jpg",
    linkedin: "https://linkedin.com/in/aquilivio-maria",
    instagram: "https://instagram.com/aquilivio.maria",
    portfolio: "https://aquiliviomaria.vercel.app/",
  },
  {
    name: "Edson Crimilido",
    year: "2º Ano",
    role: "Back-end",
    bio: "O motor por trás das nossas aplicações, lidando com dados complexos.",
    image: "/images/team/edson-crimilido.jpg",
    portfolio: "https://edson-six.vercel.app",
    linkedin: "https://www.linkedin.com/in/edson-crimildo-guambe-8780a42b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/naftalyzzdah?igsh=MW9rMzJnZGs2MnRweg==",
  },
  {
    name: "Edilson Ricardo Cuamba",
    year: "2º Ano",
    role: "Mobile / Web",
    bio: "Versátil em plataformas cruzadas, unindo web e mobile.",
    image: "/images/team/edilson-ricardo-cuamba.jpg",
    linkedin: "#",
    instagram: "#",
    portfolio: "#",
  },
  {
    name: "Isidro Helder Guiamba",
    year: "2º Ano",
    role: "Algoritmos / Lógica",
    bio: "Resolve problemas complexos com lógica eficiente e limpa.",
    image: "/images/team/isidro-helder-guiamba.jpg",
    linkedin: "#",
    instagram: "#",
    portfolio: "#",
  },
  {
    name: "Shelton Tomas",
    year: "2º Ano",
    role: "Desenvolvimento de Sistemas",
    bio: "Focado na arquitetura geral e integração de sistemas.",
    image: "/images/team/shelton-tomas.jpg",
    linkedin: "#",
    instagram: "#",
    portfolio: "#",
  }
];

export const projects: Project[] = [
  {
    id: "iagromoz",
    title: "IAGROMOZ",
    description: "Plataforma inteligente de apoio ao agricultor. Conecta produtores rurais a recursos tecnológicos para maximizar colheitas.",
    tags: ["AgriTech", "AI", "Mobile"],
    image: "/images/solutions/iagromoz-logo.png",
    featured: true,
    url: "https://github.com/aquiliviomaria/iAgroMoz"
  },
  {
    id: "moz-services",
    title: "Moz Services",
    description: "Plataforma que conecta trabalhadores autônomos a oportunidades de emprego, facilitando a empregabilidade em Moçambique.",
    tags: ["Marketplace", "Web", "Social"],
    image: "/images/solutions/moz-services.jpg",
    featured: true
  }
];

export const partners: Partner[] = [
  {
    id: "umum",
    name: "Universidade Metodista Unida de Moçambique",
    description: "Nossa universidade parceira que nos apoia no desenvolvimento académico e fornece recursos para nossos projetos de tecnologia e inovação.",
    logo: "/images/partners/umum-logo.png",
    website: "https://umum.ac.mz",
    type: "partner"
  },
  {
    id: "movimento-cidadania",
    name: "Movimento pela Cidadania",
    description: "Organização que promove a participação cidadã e o desenvolvimento social em Moçambique, colaborando em projetos de impacto comunitário.",
    logo: "/images/partners/movimento-cidadania-logo.png",
    website: "https://mpcidadania.org.mz/",
    type: "partner"
  }
];
