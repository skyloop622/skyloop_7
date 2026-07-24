export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  client?: string;
  category: 'E-Commerce' | 'Portfolio & Brand' | 'Blog Website' | 'Restaurant Website' | 'Gym & Fitness' | 'Business & Company';
  image: string;
  accentBg: string; // Tailwind gradient or color hex
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  };
  clientName: string;
  clientRole?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completionTime: string;
  overview: string;
  features: string[];
  deliverables?: string[];
  mockupType: 'browser' | 'mobile' | 'dashboard';
  highlights: string[];
}

export interface Service {
  id: string;
  iconName?: string;
  icon?: string;
  title: string;
  description: string;
  deliverables?: string[];
  features?: string[];
  startingPrice?: string;
  turnaroundTime?: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  comment: string;
  rating: number;
  projectType?: string;
  email?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  pricePKR?: string;
  subtitle?: string;
  deliveryTime?: string;
  period?: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  buttonText?: string;
}

export interface WhyChooseFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconName?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  timeframe?: string;
  icon?: string;
}

export interface OrderFormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  websiteType: string;
  price?: string;
  businessName: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  websiteType: string;
  message: string;
}

export interface CostEstimateState {
  websiteType: 'landing' | 'business' | 'ecommerce' | 'webapp';
  pageCount: number;
  features: string[];
  designLevel: 'clean' | 'premium' | 'ultra-animated';
  urgency: 'standard' | 'express';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}
