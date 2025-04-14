
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Share, Clock, Users, AlertCircle } from 'lucide-react';

// Mock campaign data
const campaignData = {
  id: "1",
  title: "Sustainable Water Purification System",
  description: "A revolutionary water purification system that works without electricity, helping communities access clean water.",
  fullDescription: `Our innovative water purification system uses cutting-edge technology to provide clean drinking water without electricity. This makes it perfect for rural communities and disaster relief efforts.

The system uses a combination of natural filtration materials and a unique gravity-fed design to remove contaminants, bacteria, and parasites from water sources.

Your support will help us:
1. Finalize the prototype design
2. Conduct field testing in rural communities
3. Begin mass production
4. Distribute systems to areas in need`,
  image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  creator: "EcoSolutions Team",
  creatorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
  category: "Environment",
  currentFunding: 12500,
  goalAmount: 25000,
  daysLeft: 15,
  backers: 138,
  updates: [
    {
      id: "u1",
      date: "2025-03-10",
      title: "New prototype testing results",
      content: "We've just completed our first round of field testing with the prototype, and the results are promising! The filtration rate exceeded our expectations."
    }
  ],
  rewards: [
    {
      id: "r1",
      title: "Early Supporter",
      amount: 25,
      description: "Thank you for your support! Get exclusive project updates and a thank you on our website.",
      deliveryDate: "July 2025"
    },
    {
      id: "r2",
      title: "Personal Purifier",
      amount: 75,
      description: "Receive a personal-sized water purification system, perfect for hiking and emergencies.",
      deliveryDate: "August 2025"
    },
    {
      id: "r3",
      title: "Complete System",
      amount: 200,
      description: "Get a full-sized water purification system capable of providing clean water for a family of 4.",
      deliveryDate: "September 2025",
      limited: true,
      remaining: 32
    }
  ]
};

const CampaignDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, we would fetch the campaign data based on id
  // For now, we'll use our mock data
  const campaign = campaignData;
  
  // Calculate funding percentage
  const fundingPercentage = Math.min(Math.round((campaign.currentFunding / campaign.goalAmount) * 100), 100);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Campaign info */}
          <div className="lg:col-span-2">
            <img 
              src={campaign.image} 
              alt={campaign.title} 
              className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
            />
            
            <h1 className="text-3xl font-bold text-fund-dark-purple mb-4">{campaign.title}</h1>
            
            <div className="flex items-center mb-6">
              <img 
                src={campaign.creatorAvatar} 
                alt={campaign.creator} 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm text-gray-500">Created by</p>
                <p className="font-medium">{campaign.creator}</p>
              </div>
            </div>
            
            <Tabs defaultValue="story" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="updates">Updates</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>
              <TabsContent value="story" className="space-y-6">
                <p className="text-gray-700">{campaign.fullDescription}</p>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-80 rounded-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Project Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </TabsContent>
              <TabsContent value="updates">
                {campaign.updates.map(update => (
                  <Card key={update.id} className="mb-4">
                    <CardHeader className="pb-2">
                      <h3 className="text-lg font-semibold">{update.title}</h3>
                      <p className="text-sm text-gray-500">{update.date}</p>
                    </CardHeader>
                    <CardContent>
                      <p>{update.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="comments">
                <p className="text-center text-gray-500 py-10">Be the first to leave a comment!</p>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right column - Funding info */}
          <div>
            <Card className="sticky top-8">
              <CardContent className="p-6 space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-2xl font-bold text-fund-deep-purple">${campaign.currentFunding.toLocaleString()}</span>
                    <span className="text-gray-600">of ${campaign.goalAmount.toLocaleString()}</span>
                  </div>
                  <Progress value={fundingPercentage} className="h-2 bg-gray-200 mb-1" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{fundingPercentage}% funded</span>
                    <span className="text-gray-600">{campaign.backers} backers</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Clock size={18} className="mr-2 text-fund-gray" />
                  <span>{campaign.daysLeft} days left</span>
                </div>
                
                <Button className="w-full bg-fund-purple hover:bg-fund-deep-purple text-white py-6">
                  Back This Project
                </Button>
                
                <div className="flex justify-center space-x-4 pt-2">
                  <Button variant="ghost" size="sm" className="text-fund-gray">
                    <Heart size={18} className="mr-2" /> Remind me
                  </Button>
                  <Button variant="ghost" size="sm" className="text-fund-gray">
                    <Share size={18} className="mr-2" /> Share
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-semibold">Choose a Reward</h3>
              
              {campaign.rewards.map(reward => (
                <Card key={reward.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  {reward.limited && (
                    <div className="absolute top-0 right-0 bg-amber-100 text-amber-800 text-xs py-1 px-3 rounded-bl-lg">
                      Limited: {reward.remaining} left
                    </div>
                  )}
                  <CardContent className="p-6 space-y-3">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">{reward.title}</h4>
                      <span className="text-fund-purple font-bold">${reward.amount}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{reward.description}</p>
                    <div className="flex items-center text-xs text-gray-600">
                      <Clock size={14} className="mr-1" />
                      <span>Estimated delivery: {reward.deliveryDate}</span>
                    </div>
                    <Button variant="outline" className="w-full border-fund-purple text-fund-purple hover:bg-fund-light-purple">
                      Select Reward
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
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

export default CampaignDetail;
