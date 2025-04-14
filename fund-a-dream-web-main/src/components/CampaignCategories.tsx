
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Brush, BookOpen, Lightbulb, Heart, TreePine, Music, Film, Laptop } from 'lucide-react';

const categories = [
  { 
    name: 'Arts', 
    icon: <Brush size={24} />,
    color: 'bg-blue-100 text-blue-600',
    count: 253
  },
  { 
    name: 'Education', 
    icon: <BookOpen size={24} />,
    color: 'bg-green-100 text-green-600',
    count: 189
  },
  { 
    name: 'Technology', 
    icon: <Lightbulb size={24} />,
    color: 'bg-purple-100 text-purple-600',
    count: 312
  },
  { 
    name: 'Community', 
    icon: <Heart size={24} />,
    color: 'bg-pink-100 text-pink-600',
    count: 178
  },
  { 
    name: 'Environment', 
    icon: <TreePine size={24} />,
    color: 'bg-emerald-100 text-emerald-600',
    count: 145
  },
  { 
    name: 'Music', 
    icon: <Music size={24} />,
    color: 'bg-red-100 text-red-600',
    count: 201
  },
  { 
    name: 'Film', 
    icon: <Film size={24} />,
    color: 'bg-amber-100 text-amber-600',
    count: 167
  },
  { 
    name: 'Startups', 
    icon: <Laptop size={24} />,
    color: 'bg-indigo-100 text-indigo-600',
    count: 231
  }
];

const CampaignCategories: React.FC = () => {
  return (
    <section className="py-16 bg-fund-soft-gray">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-fund-dark-purple mb-3">Explore Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find projects that match your interests and make a difference in the areas you care about</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link to={`/campaigns?category=${category.name}`} key={category.name}>
              <Card className="h-full hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className={`p-3 rounded-full ${category.color} mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-xs text-gray-500">{category.count} projects</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignCategories;
