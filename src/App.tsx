import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  MessageSquare, 
  ChefHat,
  Home,
  User,
  Star,
  DollarSign,
  FileText,
  LayoutDashboard,
  Leaf,
  Recycle,
  Sun,
  Bot,
  Store,
  ArrowRight
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('notifications');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <ChefHat className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">Purchasync</span>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Product, supplier, service, freelance"
                    className="w-96 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <NavItem icon={<Home className="h-6 w-6" />} text="Home" />
              <NavItem icon={<Bell className="h-6 w-6" />} text="Notifications" />
              <NavItem icon={<MessageSquare className="h-6 w-6" />} text="Messages" />
              <NavItem icon={<Bot className="h-6 w-6" />} text="AI Assistant" />
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="space-y-3">
                <QuickAction 
                  icon={<Store />} 
                  text="Go to Marketplace" 
                  description="Browse products and services" 
                />
                <QuickAction 
                  icon={<DollarSign />} 
                  text="Create RFQ" 
                  description="Create new request for quotation" 
                />
                <QuickAction 
                  icon={<FileText />} 
                  text="My Quotes" 
                  description="Review and manage your quotations" 
                />
                <QuickAction 
                  icon={<LayoutDashboard />} 
                  text="My Dashboard" 
                  description="View your analytics and activities" 
                />
              </div>
            </div>
          </div>

          {/* Main Feed and Features */}
          <div className="md:col-span-2 space-y-6">
            {/* Content Tabs */}
            <div className="bg-white rounded-lg shadow">
              <div className="flex border-b">
                <TabButton active={activeTab === 'notifications'} onClick={() => setActiveTab('notifications')}>Notifications</TabButton>
                <TabButton active={activeTab === 'myquotes'} onClick={() => setActiveTab('myquotes')}>My Quotes</TabButton>
                <TabButton active={activeTab === 'feed'} onClick={() => setActiveTab('feed')}>Community</TabButton>
              </div>

              {activeTab === 'notifications' && (
                <div className="p-4 space-y-4">
                  <NotificationItem
                    title="New Quote Received"
                    message="UAE Restaurant Supply Co. has submitted a quote for your Kitchen Equipment Package"
                    time="2 hours ago"
                    actionText="View Quote"
                  />
                  <NotificationItem
                    title="Event Reminder"
                    message="Gulfood 2025 starts in 3 days. Don't forget to check your schedule!"
                    time="5 hours ago"
                    actionText="View Event"
                  />
                  <NotificationItem
                    title="Price Alert"
                    message="Price drop alert for bulk coffee supplies in your watchlist"
                    time="Yesterday"
                    actionText="View Details"
                  />
                </div>
              )}

              {activeTab === 'feed' && (
                <div className="p-4">
                  {/* Post Creation */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                      <input
                        type="text"
                        placeholder="Share your thoughts..."
                        className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Posts */}
                  <Post
                    name="Chef Ahmed Al-Sayed"
                    position="Celebrity Chef & Culinary Influencer"
                    company="Culinary Excellence UAE"
                    time="2h"
                    content="Excited to announce my partnership with @EcoKitchenware! 🌟 Just launched our signature line of sustainable kitchen equipment. These premium tools are designed for professional chefs while being eco-conscious. Special launch offer: Use code CHEFAHMED for 15% off! #SustainableKitchen #ChefLife #UAECulinary"
                    image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000"
                  />

                  <Post
                    name="F&B Trends UAE"
                    position="Market Analysis"
                    company="Industry Insights"
                    time="5h"
                    content="Latest F&B Procurement Trends 2025: Sustainable sourcing leads the way with 60% of UAE hotels now prioritizing local suppliers. Full report available."
                    image="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000"
                  />
                </div>
              )}

              {activeTab === 'myquotes' && (
                <div className="p-4 space-y-4">
                  <QuoteItem
                    rfqNumber="RFQ-2025-001"
                    dateCreated="2025-02-10"
                    category="Kitchen Equipment"
                    responses={3}
                    daysLeft={2}
                  />
                  <QuoteItem
                    rfqNumber="RFQ-2025-002"
                    dateCreated="2025-02-08"
                    category="Food & Beverage"
                    responses={5}
                    daysLeft={4}
                  />
                  <QuoteItem
                    rfqNumber="RFQ-2025-003"
                    dateCreated="2025-02-05"
                    category="Housekeeping Supplies"
                    responses={8}
                    daysLeft={1}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-1 space-y-6">
            {/* Sustainable Solutions */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold mb-4">Sustainable Solutions</h3>
              <div className="space-y-4">
                <SustainableCategory
                  icon={<Leaf className="h-5 w-5" />}
                  title="Made in UAE Products"
                  count={245}
                />
                <SustainableCategory
                  icon={<Recycle className="h-5 w-5" />}
                  title="Single-use Plastic Alternatives"
                  count={128}
                />
                <SustainableCategory
                  icon={<Sun className="h-5 w-5" />}
                  title="Waste Management Solutions"
                  count={167}
                />
              </div>
            </div>

            {/* Top Deals */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold mb-4">Top Deals</h3>
              <div className="space-y-4">
                <DealCard
                  title="Commercial Kitchen Package"
                  discount="25% OFF"
                  validUntil="2 days left"
                />
                <DealCard
                  title="Bulk Coffee Supplies"
                  discount="15% OFF"
                  validUntil="5 days left"
                />
              </div>
            </div>

            {/* Recommended for me */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold mb-4">Recommended for me</h3>
              <div className="space-y-4">
                <RecommendedItem
                  name="Premium Coffee Machines"
                  category="Equipment"
                  rating={4.8}
                />
                <RecommendedItem
                  name="Eco-Friendly Packaging"
                  category="Supplies"
                  rating={4.5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <button className="flex flex-col items-center text-gray-500 hover:text-blue-600">
      {icon}
      <span className="text-xs mt-1">{text}</span>
    </button>
  );
}

function QuickAction({ icon, text, description }: { icon: React.ReactNode; text: string; description: string }) {
  return (
    <button className="w-full flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="text-blue-600">{icon}</div>
      <div className="text-left">
        <div className="font-medium">{text}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </button>
  );
}

function TabButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      className={`px-4 py-3 text-sm font-medium ${
        active
          ? 'border-b-2 border-blue-500 text-blue-600'
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function NotificationItem({ title, message, time, actionText }: { title: string; message: string; time: string; actionText: string }) {
  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium">{title}</h4>
        <span className="text-sm text-gray-500">{time}</span>
      </div>
      <p className="text-gray-600 text-sm mb-3">{message}</p>
      <button className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-700">
        {actionText}
        <ArrowRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  );
}

function Post({ 
  name, 
  position, 
  company, 
  time, 
  content, 
  image 
}: { 
  name: string;
  position: string;
  company: string;
  time: string;
  content: string;
  image?: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-6 w-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{position} at {company}</p>
            <p className="text-xs text-gray-500">{time}</p>
          </div>
        </div>
        <p className="mt-4">{content}</p>
        {image && (
          <img src={image} alt="Post content" className="mt-4 rounded-lg w-full object-cover h-64" />
        )}
        <div className="mt-4 flex items-center space-x-4 text-gray-500">
          <button className="flex items-center space-x-1 hover:text-blue-600">
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-600">
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-600">
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function QuoteItem({ 
  rfqNumber, 
  dateCreated, 
  category, 
  responses, 
  daysLeft 
}: { 
  rfqNumber: string;
  dateCreated: string;
  category: string;
  responses: number;
  daysLeft: number;
}) {
  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="text-gray-800">{rfqNumber}</h4>
          <p className="text-sm font-semibold text-gray-800">{category}</p>
          <p className="text-sm text-gray-500">Created: {dateCreated}</p>
        </div>
        <button className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-700">
          View Details
          <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-green-600">{responses} Responses</span>
        <span className="text-sm text-gray-500">{daysLeft} days left</span>
      </div>
    </div>
  );
}

function SustainableCategory({ icon, title, count }: { icon: React.ReactNode; title: string; count: number }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-white shadow hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="text-green-600">{icon}</div>
        <span className="font-medium text-sm">{title}</span>
      </div>
      <span className="text-sm text-gray-500">{count}</span>
    </div>
  );
}

function DealCard({ title, discount, validUntil }: { title: string; discount: string; validUntil: string }) {
  return (
    <div className="border-l-4 border-green-500 pl-3">
      <h4 className="font-medium text-sm">{title}</h4>
      <p className="text-xs text-green-600 font-bold">{discount}</p>
      <p className="text-xs text-gray-500">{validUntil}</p>
    </div>
  );
}

function RecommendedItem({ name, category, rating }: { name: string; category: string; rating: number }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-medium text-sm">{name}</h4>
        <p className="text-xs text-gray-500">{category}</p>
        <div className="flex items-center mt-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-xs ml-1">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default App;