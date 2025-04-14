
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedCampaigns from '../components/FeaturedCampaigns';
import CampaignCategories from '../components/CampaignCategories';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedCampaigns />
      <CampaignCategories />
      <footer className="bg-fund-dark-purple text-white py-8">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 FundDream. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
