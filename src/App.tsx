import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectModal } from './components/ProjectModal';
import { LiveDemoModal } from './components/LiveDemoModal';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { FaqSection } from './components/FaqSection';
import { OrderSection } from './components/OrderSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { PROJECTS_DATA } from './data/mockData';
import { Project } from './types';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [liveDemoProject, setLiveDemoProject] = useState<Project | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [preselectedPackage, setPreselectedPackage] = useState('');
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');
  const [selectedProjectForContact, setSelectedProjectForContact] = useState<string>('');

  const selectedProjectObj = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || null;

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOrder = () => {
    setPreselectedPackage('');
    setIsOrderModalOpen(true);
  };

  const handleOpenOrderWithProject = (projectTitle: string) => {
    setPreselectedPackage(`Custom Website for ${projectTitle}`);
    setIsOrderModalOpen(true);
  };

  const handleOpenEstimator = () => {
    const estimatorElem = document.getElementById('estimator');
    if (estimatorElem) {
      estimatorElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setContactInitialMessage(`Hi Ahmed! I would like to inquire about your "${serviceTitle}" service for my business.`);
    handleOpenContact();
  };

  const handleApplyEstimateToContact = (summary: string) => {
    setContactInitialMessage(summary);
    handleOpenContact();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Background Interactive Effects */}
      <BackgroundEffects />

      {/* Top Navbar */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenOrder={handleOpenOrder}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenContact={handleOpenContact}
          onOpenOrder={handleOpenOrder}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* Services Offered */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* Why Choose Skyloop */}
        <WhyChooseSection
          onOpenOrder={handleOpenOrder}
        />

        {/* Client Reviews / Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Website Ordering Form Section */}
        <OrderSection />

        {/* About Ahmed Raza Khan */}
        <AboutSection
          onOpenContact={handleOpenContact}
        />

        {/* 4-Step Development Process */}
        <ProcessSection />

        {/* Contact Direct Section */}
        <ContactSection
          initialMessage={contactInitialMessage}
          selectedProjectName={selectedProjectForContact}
        />
      </main>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProjectObj}
        onClose={() => setSelectedProjectId(null)}
        onOrderSimilar={(title) => handleOpenOrderWithProject(title)}
      />

      {/* Interactive Live Demo Preview Modal */}
      <LiveDemoModal
        project={liveDemoProject}
        onClose={() => setLiveDemoProject(null)}
        onOpenOrder={handleOpenOrder}
      />

      {/* Order Website Modal Trigger */}
      {isOrderModalOpen && (
        <OrderSection
          isOpenAsModal={true}
          onCloseModal={() => setIsOrderModalOpen(false)}
          preselectedPackage={preselectedPackage}
        />
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}
