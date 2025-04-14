
import React from 'react';
import CampaignCard from './CampaignCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Sample campaign data
const featuredCampaigns = [
  {
    id: "1",
    title: "Sustainable Water Purification System",
    description: "A revolutionary water purification system that works without electricity, helping communities access clean water.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    category: "Environment",
    currentFunding: 12500,
    goalAmount: 25000,
    daysLeft: 15
  },
  {
    id: "2",
    title: "Educational Coding Kit for Kids",
    description: "An interactive kit that teaches children programming fundamentals through fun, hands-on projects.",
    image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Education",
    currentFunding: 8700,
    goalAmount: 15000,
    daysLeft: 21
  },
  {
    id: "3",
    title: "Community Art Installation",
    description: "A collaborative public art project bringing together local artists to transform an urban space.",
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Arts",
    currentFunding: 4300,
    goalAmount: 10000,
    daysLeft: 30
  }
];

const FeaturedCampaigns: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-fund-dark-purple mb-2">Featured Projects</h2>
            <p className="text-gray-600">Discover innovative campaigns that are making waves</p>
          </div>
          <Link to="/campaigns">
            <Button variant="outline" className="border-fund-purple text-fund-purple hover:bg-fund-light-purple">
              View All Projects
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCampaigns.map(campaign => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
