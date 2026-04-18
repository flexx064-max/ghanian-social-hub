import React from "react";
import { 
  Home, 
  Compass, 
  Users, 
  Bookmark, 
  Hash, 
  Settings, 
  LogOut, 
  TrendingUp,
  MessageCircle
} from "lucide-react";
import { cn } from "../../lib/utils";

const NAV_ITEMS = [
  { icon: Home, label: "Home", active: true },
  { icon: Compass, label: "Explore" },
  { icon: Users, label: "Communities" },
  { icon: MessageCircle, label: "Messages" },
  { icon: Bookmark, label: "Bookmarks" },
  { icon: TrendingUp, label: "Trending" },
  { icon: Hash, label: "Topics" },
  { icon: Settings, label: "Settings" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-56px)] sticky top-14 p-4 border-r border-gray-100 overflow-y-auto">
      <div className="space-y-1">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors",
              item.active 
                ? "bg-orange-500 text-white shadow-md shadow-orange-200" 
                : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;