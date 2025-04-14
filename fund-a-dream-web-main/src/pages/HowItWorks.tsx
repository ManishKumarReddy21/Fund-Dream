
import React from 'react';
import Navbar from '../components/Navbar';
import { Book, CheckCircle, Users, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-fund-dark-purple mb-4">How FundDream Works</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy to bring creative projects to life and support causes you care about.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <div className="bg-fund-soft-gray rounded-lg p-6 md:p-8 shadow-md">
            <h2 className="text-2xl font-bold text-fund-purple mb-6">For Project Creators</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-fund-purple p-2 rounded-full mr-4 mt-1">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create Your Campaign</h3>
                  <p className="text-gray-700">Design your campaign page with compelling descriptions, images, and videos that showcase your project.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-fund-purple p-2 rounded-full mr-4 mt-1">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Share with Your Network</h3>
                  <p className="text-gray-700">Promote your campaign to friends, family, and social networks to gain initial momentum.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-fund-purple p-2 rounded-full mr-4 mt-1">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Receive Funding</h3>
                  <p className="text-gray-700">When your campaign succeeds, you'll receive the funds needed to bring your project to life.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-fund-light-purple rounded-lg p-6 md:p-8 shadow-md">
            <h2 className="text-2xl font-bold text-fund-deep-purple mb-6">For Backers</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-fund-deep-purple p-2 rounded-full mr-4 mt-1">
                  <Book size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discover Projects</h3>
                  <p className="text-gray-700">Browse through campaigns from creators around the world to find projects that inspire you.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-fund-deep-purple p-2 rounded-full mr-4 mt-1">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Support a Campaign</h3>
                  <p className="text-gray-700">Contribute to a campaign with a financial pledge and often receive rewards in return.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-fund-deep-purple p-2 rounded-full mr-4 mt-1">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
                  <p className="text-gray-700">Follow project updates and connect with creators and other backers who share your interests.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-fund-dark-purple mb-6">Ready to Get Started?</h2>
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

export default HowItWorks;
