
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from 'react-router-dom';

interface CampaignCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  currentFunding: number;
  goalAmount: number;
  daysLeft: number;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ 
  id, 
  title, 
  description, 
  image, 
  category,
  currentFunding,
  goalAmount,
  daysLeft
}) => {
  // Calculate funding percentage
  const fundingPercentage = Math.min(Math.round((currentFunding / goalAmount) * 100), 100);
  
  return (
    <Link to={`/campaign/${id}`}>
      <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader className="p-4 pb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold bg-fund-light-purple text-fund-deep-purple px-2 py-1 rounded-full">
              {category}
            </span>
            <span className="text-xs text-fund-gray">
              {daysLeft} days left
            </span>
          </div>
          <h3 className="font-bold text-lg text-fund-dark-purple line-clamp-2">{title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">{description}</p>
          <Progress value={fundingPercentage} className="h-2 bg-gray-200" />
          <div className="flex justify-between mt-2 text-sm">
            <span className="font-semibold text-fund-deep-purple">${currentFunding.toLocaleString()}</span>
            <span className="text-gray-500">{fundingPercentage}% of ${goalAmount.toLocaleString()}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 border-t border-gray-100">
          <div className="w-full flex justify-between text-xs">
            <span className="text-fund-gray">Backers: 42</span>
            <span className="font-medium text-fund-purple">View Campaign →</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CampaignCard;
