
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CampaignCard from '../components/CampaignCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';

// Sample campaign data
const allCampaigns = [
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
  },
  {
    id: "4",
    title: "Eco-Friendly Bamboo Cutlery Set",
    description: "Reduce plastic waste with our reusable bamboo cutlery sets, perfect for on-the-go meals.",
    image: "https://images.unsplash.com/photo-1584346133934-7a7588383b3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Environment",
    currentFunding: 3200,
    goalAmount: 5000,
    daysLeft: 8
  },
  {
    id: "5",
    title: "Independent Film: 'The Silent Echo'",
    description: "A thought-provoking indie film exploring themes of connection and isolation in modern society.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1459&q=80",
    category: "Film",
    currentFunding: 15800,
    goalAmount: 30000,
    daysLeft: 45
  },
  {
    id: "6",
    title: "Community Garden Initiative",
    description: "Transforming vacant urban lots into productive community gardens that provide fresh produce and educational opportunities.",
    image: "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Community",
    currentFunding: 6700,
    goalAmount: 12000,
    daysLeft: 25
  }
];

const AllCampaigns: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-fund-dark-purple mb-2">Explore All Projects</h1>
          <p className="text-gray-600">Discover innovative ideas and creative projects that need your support</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex gap-4">
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="funded">Most Funded</SelectItem>
                <SelectItem value="ending-soon">Ending Soon</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="environment">Environment</SelectItem>
                <SelectItem value="film">Film</SelectItem>
                <SelectItem value="community">Community</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="nearly-funded">Nearly Funded</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCampaigns.map(campaign => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="trending" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCampaigns.slice(1, 4).map(campaign => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nearly-funded" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCampaigns.slice(3, 6).map(campaign => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCampaigns.slice(0, 3).map(campaign => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" className="border-fund-purple text-fund-purple hover:bg-fund-light-purple">
            Load More Projects
          </Button>
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

export default AllCampaigns;
