
import React from 'react';
import Navbar from '../components/Navbar';
import { Heart, Award, Globe, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-fund-dark-purple mb-4">About FundDream</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're on a mission to help bring creative projects to life and make dreams a reality.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-fund-purple mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              FundDream was founded in 2022 with a simple vision: to create a platform where innovators, creators, and dreamers could find the support they need to bring their ideas to life.
            </p>
            <p className="text-gray-700 mb-4">
              What began as a small team of passionate entrepreneurs has grown into a vibrant community connecting thousands of project creators with millions of supporters worldwide.
            </p>
            <p className="text-gray-700">
              We believe that great ideas can come from anywhere, and everyone should have the opportunity to make their vision a reality, regardless of their background or connections.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-full">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-fund-light-purple rounded-full opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="FundDream team" 
                className="rounded-lg shadow-xl relative z-10 w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-fund-purple rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-fund-purple mb-10 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-fund-light-purple mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-fund-purple" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-fund-dark-purple">Empowerment</h3>
              <p className="text-gray-600">We believe in giving people the tools and resources to turn their ideas into reality.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-fund-light-purple mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-fund-purple" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-fund-dark-purple">Inclusivity</h3>
              <p className="text-gray-600">Our platform is designed to be accessible to creators from all backgrounds and communities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-fund-light-purple mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-fund-purple" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-fund-dark-purple">Trust</h3>
              <p className="text-gray-600">We prioritize transparency and accountability in all of our operations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-fund-light-purple mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="text-fund-purple" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-fund-dark-purple">Quality</h3>
              <p className="text-gray-600">We strive for excellence in everything we do, from platform design to customer support.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center bg-fund-soft-gray p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-fund-dark-purple mb-6">Join Our Mission</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Whether you're a creator with a bold idea or a supporter looking to back the next big innovation, 
            we invite you to become part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/start-campaign" className="bg-fund-purple hover:bg-fund-deep-purple text-white py-3 px-6 rounded-md text-lg font-medium transition-colors">
              Start Your Campaign
            </a>
            <a href="/campaigns" className="border border-fund-purple text-fund-purple hover:bg-fund-light-purple py-3 px-6 rounded-md text-lg font-medium transition-colors">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
      
      <footer className="bg-fund-dark-purple text-white py-8 mt-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 FundDream. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
