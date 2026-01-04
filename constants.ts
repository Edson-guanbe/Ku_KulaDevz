import { Member, Project, Translation, Partner } from './types';

export const translations: Record<string, Translation> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Quem Somos',
      services: 'Serviços',
      projects: 'Soluções',
      team: 'Equipa',
      events: 'Eventos & Premiações',
      partners: 'Parceiros',
      contact: 'Contato',
    },
    hero: {
      title: 'A excelência não é uma opção, é o nosso padrão',
      subtitle: 'Desenvolvendo soluções digitais inovadoras para problemas reais em Moçambique.',
      ctaPrimary: 'Ver Projetos',
      ctaSecondary: 'Conhecer a Equipa',
    },
    about: {
      title: 'Quem Somos',
      description: 'A Ku_KulaDevz é um grupo de estudantes dedicado a desenvolver soluções digitais inovadoras para problemas reais em Moçambique.',
      mission: 'Desenvolver tecnologia acessível e impactante.',
      vision: 'Ser referência em inovação tecnológica universitária em Moçambique.',
      values: 'Inovação, Colaboração, Impacto Social, Excelência.',
    },
    projects: {
      title: 'Nossas Soluções',
      viewDetails: 'Ver Detalhes',
    },
    services: {
      title: 'Serviços Digitais',
      subtitle: 'Soluções tecnológicas completas para impulsionar seu negócio no mundo digital.',
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
      title: 'Eventos & Premiações',
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
      services: 'Services',
      projects: 'Solutions',
      team: 'Team',
      events: 'Events & Awards',
      partners: 'Partners',
      contact: 'Contact',
    },
    hero: {
      title: 'Excellence is not an option, it is our standard',
      subtitle: 'Developing innovative digital solutions for real-world problems in Mozambique.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Meet the Team',
    },
    about: {
      title: 'About Us',
      description: 'Ku_KulaDevz is a group of students dedicated to developing innovative digital solutions for real-world problems in Mozambique.',
      mission: 'Develop accessible and impactful technology.',
      vision: 'To be a reference in university technological innovation in Mozambique.',
      values: 'Innovation, Collaboration, Social Impact, Excellence.',
    },
    projects: {
      title: 'Our Solutions',
      viewDetails: 'View Details',
    },
    services: {
      title: 'Digital Services',
      subtitle: 'Complete technological solutions to boost your business in the digital world.',
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
      title: 'Events & Awards',
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
    name: "Anselmo Dora Bistiro Gulane",
    year: "2º Ano",
    role: "Programador Full Stack",
    bio: "Especialista em segurança da informação e arquitetura web robusta.",
    image: "/images/team/anselmoDora.webp",
    rating: 5,
    linkedin: "https://mz.linkedin.com/in/anselmo-dora-bistiro-gulane-a68505390",
    instagram: "https://www.instagram.com/anselmo.offcial_/",
    portfolio: "https://anselmo-dora-bistiro.vercel.app/",
    imageStyle: {
      objectPosition: 'center -40%',
      transform: 'scale(2.0)'
    }
  },
  {
    name: "André Augusto Júnior",
    year: "2º Ano",
    role: "Backend",
    bio: "Especialista em desenvolvimento de servidores e APIs robustas.",
    image: "/images/team/andre-augusto.webp",
    rating: 4,
    imageStyle: {
      objectPosition: 'center -130%',
      transform: 'scale(1.9)'
    }
  },
  {
    name: "Anselma Tiburcio",
    year: "3º Ano",
    role: "Front-end / Mobile",
    bio: "Paixão por UI/UX e desenvolvimento de aplicações móveis intuitivas.",
    image: "/images/team/anselma-tiburcio.webp",
    rating: 5,
    linkedin: "https://mz.linkedin.com/in/anselma-tiburcio-73165930b",
    instagram: "https://www.instagram.com/anselmatiburcio/",
    imageStyle: {
      objectPosition: 'center -40%',
      transform: 'scale(1.5)'
    }
  },
  {
    name: "Aquilivio Maria",
    year: "3º Ano",
    role: "DevOps",
    bio: "Especialista em infraestrutura, deploy e automação de processos.",
    image: "/images/team/aquiliviomaria.webp",
    rating: 4,
    linkedin: "https://linkedin.com/in/aquilivio-maria",
    instagram: "https://instagram.com/aquilivio.maria",
    portfolio: "https://aquiliviomaria.vercel.app/"
  },
  
  {
    name: "Edson Crimilido Guambe",
    year: "2º Ano",
    role: "Full Stack Developer",
    bio: "O motor por trás das nossas aplicações, lidando com dados complexos.",
    image: "/images/team/edsonGuambe.webp",
    rating: 4,
    portfolio: "https://edsonguambe.vercel.app",
    linkedin: "https://www.linkedin.com/in/edson-crimildo-guambe-8780a42b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/naftalyzzdah?igsh=MW9rMzJnZGs2MnRweg==",
  },
  {
    name: "Edilson Ricardo Cuamba",
    year: "2º Ano",
    role: "Frontend",
    bio: "Focado em criar interfaces modernas e experiências web responsivas.",
    image: "/images/team/edilson-ricardo.webp",
    rating: 4,
    imageStyle: {
      objectPosition: 'center 25%',
      transform: 'scale(1.3)'
    }
  },
  {
    name: "Isidro Helder Guiamba",
    year: "2º Ano",
    role: "Frontend / UI/UX",
    bio: "Especialista em interfaces de usuário e experiência do usuário intuitiva.",
    image: "/images/team/isidro-guimba.webp",
    rating: 5,
    portfolio: "https://kinho-dev.vercel.app/",
    imageStyle: {
      objectPosition: 'center 25%',
      transform: 'scale(2.2)'
    }
  },
  {
    name: "Shelton Tomas",
    year: "2º Ano",
    role: "Frontend / Designer",
    bio: "Especialista em design de interfaces e desenvolvimento frontend criativo.",
    image: "/images/team/shelton-crimildo.webp",
    rating: 4,
    imageStyle: {
      objectPosition: 'center -200%',
      transform: 'scale(1.7)'
    }
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
    featured: true,
    url: "https://github.com/AnselmoXf1/moz-seevices--proto.git"
  }
];

export const partners: Partner[] = [
  {
    id: "umum",
    name: "Universidade Metodista Unida de Moçambique",
    description: "Universidade que nos apoia no desenvolvimento académico e fornece recursos para nossos projetos.",
    logo: "/images/partners/umum-logo.png",
    website: "https://umum.ac.mz",
    type: "partner"
  },
  {
    id: "movimento-cidadania",
    name: "Movimento pela Cidadania",
    description: "Organização que promove a participação cidadã e colabora em projetos de impacto social.",
    logo: "/images/partners/movimento-cidadania-logo.png",
    website: "https://mpcidadania.org.mz/",
    type: "partner"
  },
  {
    id: "jovem-criativo",
    name: "Prémio Jovem Criativo",
    description: "Programa que reconhece e apoia jovens inovadores em Moçambique através de iniciativas criativas e tecnológicas.",
    logo: "/images/partners/jovem-criativo.jpg",
    website: "https://portaldogoverno.gov.mz/ministerios/ministerio-da-juventude-e-desportos/",
    type: "partner"
  }
];
