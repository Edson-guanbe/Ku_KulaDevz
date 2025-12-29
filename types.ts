export type Language = 'pt' | 'en';

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    team: string;
    events: string;
    partners: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    description: string;
    mission: string;
    vision: string;
    values: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    viewDetails: string;
  };
  partners: {
    title: string;
    description: string;
  };
  sponsors: {
    title: string;
    description: string;
  };
  stats: {
    farmers: string;
    members: string;
    projects: string;
  };
  team: {
    title: string;
    role: string;
  };
  events: {
    title: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
  };
}

export interface Member {
  name: string;
  year: string;
  role: string;
  bio: string;
  image: string;
  rating: number; // Avaliação de 1-5 estrelas
  linkedin?: string;
  instagram?: string;
  portfolio?: string;
  imageStyle?: {
    objectPosition?: string;
    transform?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  featured: boolean;
  url?: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
  website?: string;
  type: 'partner' | 'sponsor';
}
