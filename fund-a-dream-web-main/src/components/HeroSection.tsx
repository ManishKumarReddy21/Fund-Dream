
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-fund-soft-gray to-fund-light-purple py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fund-dark-purple leading-tight">
              Bring Your Ideas <span className="text-fund-purple">to Life</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Fund innovative projects and help creators achieve their dreams. Join our community of backers making a difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-fund-purple hover:bg-fund-deep-purple text-white text-lg py-6 px-8">
                Start a Campaign
              </Button>
              <Button variant="outline" className="border-fund-purple text-fund-purple hover:bg-fund-light-purple text-lg py-6 px-8">
                Explore Projects <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 animate-scale-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-fund-purple rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="People working on creative projects" 
                className="rounded-lg shadow-xl relative z-10 w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-fund-light-purple rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
