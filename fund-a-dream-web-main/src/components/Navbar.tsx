
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 bg-white border-b border-gray-200">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-fund-purple">Fund<span className="text-fund-deep-purple">Dream</span></span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-fund-purple transition-colors">Home</Link>
          <Link to="/campaigns" className="text-gray-700 hover:text-fund-purple transition-colors">Explore</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-fund-purple transition-colors">How It Works</Link>
          <Link to="/about" className="text-gray-700 hover:text-fund-purple transition-colors">About</Link>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <Search size={20} />
          </Button>
          <Link to="/start-campaign">
            <Button className="bg-fund-purple hover:bg-fund-deep-purple text-white">Start a Campaign</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
