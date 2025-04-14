
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Target, Calendar, DollarSign, Image, FileText, MapPin, Tag } from 'lucide-react';
import { toast } from "sonner";

const StartCampaign: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    goal: '',
    deadline: '',
    location: '',
    description: '',
    image: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically send the data to an API
    toast.success("Campaign created successfully!");
    
    // For demo purposes, we'll just navigate back to the home page
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-fund-dark-purple mb-4">Start Your Campaign</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share your idea with the world and get the funding you need to make it a reality.
          </p>
        </div>
        
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3].map((stepNum) => (
              <div 
                key={stepNum} 
                className={`flex flex-col items-center ${step === stepNum ? 'text-fund-purple' : 'text-gray-400'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step === stepNum ? 'bg-fund-purple text-white' : 'bg-gray-200'}`}>
                  {stepNum}
                </div>
                <span className="text-sm">
                  {stepNum === 1 ? 'Basics' : stepNum === 2 ? 'Details' : 'Review'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-fund-purple rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-fund-dark-purple mb-6">Campaign Basics</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-gray-700">Campaign Title</Label>
                  <div className="flex items-center mt-1">
                    <FileText className="text-gray-400 w-5 h-5 mr-2" />
                    <Input
                      id="title"
                      name="title"
                      placeholder="Enter a clear, specific title for your campaign"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="category" className="text-gray-700">Category</Label>
                  <div className="flex items-center mt-1">
                    <Tag className="text-gray-400 w-5 h-5 mr-2" />
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange as any}
                      required
                      className="flex-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="">Select a category</option>
                      <option value="technology">Technology</option>
                      <option value="arts">Arts</option>
                      <option value="education">Education</option>
                      <option value="community">Community</option>
                      <option value="health">Health</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="goal" className="text-gray-700">Funding Goal ($)</Label>
                  <div className="flex items-center mt-1">
                    <DollarSign className="text-gray-400 w-5 h-5 mr-2" />
                    <Input
                      id="goal"
                      name="goal"
                      type="number"
                      min="1"
                      placeholder="Amount needed to fund your project"
                      value={formData.goal}
                      onChange={handleChange}
                      required
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="deadline" className="text-gray-700">Campaign Deadline</Label>
                  <div className="flex items-center mt-1">
                    <Calendar className="text-gray-400 w-5 h-5 mr-2" />
                    <Input
                      id="deadline"
                      name="deadline"
                      type="date"
                      value={formData.deadline}
                      onChange={handleChange}
                      required
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="button" 
                  onClick={nextStep}
                  className="w-full bg-fund-purple hover:bg-fund-deep-purple text-white"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-fund-dark-purple mb-6">Campaign Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="location" className="text-gray-700">Location</Label>
                  <div className="flex items-center mt-1">
                    <MapPin className="text-gray-400 w-5 h-5 mr-2" />
                    <Input
                      id="location"
                      name="location"
                      placeholder="Where is your project based?"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description" className="text-gray-700">Campaign Description</Label>
                  <textarea
                    id="description"
                    name="description"
                    rows={6}
                    placeholder="Tell us about your project. What makes it special? Why should people fund it?"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>
                
                <div>
                  <Label htmlFor="image" className="text-gray-700">Campaign Image</Label>
                  <div className="mt-1">
                    <label className="flex flex-col items-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                      <Image className="text-gray-400 w-8 h-8" />
                      <span className="mt-2 text-base text-gray-600">Upload a cover image</span>
                      <span className="text-xs text-gray-500 mt-1">(PNG, JPG up to 5MB)</span>
                      <Input 
                        id="image" 
                        name="image" 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange}
                        className="hidden" 
                      />
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between pt-4 space-x-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={prevStep}
                  className="w-1/2 border-fund-purple text-fund-purple"
                >
                  Back
                </Button>
                <Button 
                  type="button" 
                  onClick={nextStep}
                  className="w-1/2 bg-fund-purple hover:bg-fund-deep-purple text-white"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-fund-dark-purple mb-6">Review & Submit</h2>
              
              <div className="space-y-4 bg-fund-soft-gray p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Campaign Title</h3>
                    <p className="text-gray-800">{formData.title || "Not provided"}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Category</h3>
                    <p className="text-gray-800">{formData.category || "Not selected"}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Funding Goal</h3>
                    <p className="text-gray-800">${formData.goal || "0"}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Deadline</h3>
                    <p className="text-gray-800">{formData.deadline || "Not set"}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Location</h3>
                    <p className="text-gray-800">{formData.location || "Not provided"}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Image</h3>
                    <p className="text-gray-800">{formData.image ? formData.image.name : "No image uploaded"}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">Description</h3>
                  <p className="text-gray-800">{formData.description || "Not provided"}</p>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-sm text-gray-600 mb-4">
                  By submitting this campaign, you agree to our Terms of Service and Creator Guidelines.
                </p>
                
                <div className="flex justify-between space-x-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={prevStep}
                    className="w-1/2 border-fund-purple text-fund-purple"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="w-1/2 bg-fund-purple hover:bg-fund-deep-purple text-white"
                  >
                    Launch Campaign
                  </Button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
      
      <footer className="bg-fund-dark-purple text-white py-8 mt-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 FundDream. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StartCampaign;
