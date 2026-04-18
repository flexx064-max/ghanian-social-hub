import React from "react";
import { Search, Bell, Mail, Menu, User, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MOCK_USER } from "../../data/mockData";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-2">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 p-1.5 rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">
            Ubuntu<span className="text-orange-500">Social</span>
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search communities, people..." 
            className="pl-10 bg-gray-50 border-none focus-visible:ring-orange-500 rounded-full h-10"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-3">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-orange-50 hover:text-orange-500">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-orange-50 hover:text-orange-500">
            <Mail className="w-5 h-5" />
          </Button>
          <div className="h-8 w-px bg-gray-200 mx-1 hidden sm:block"></div>
          <div className="flex items-center gap-2 pl-1 cursor-pointer group">
            <Avatar className="w-8 h-8 border-2 border-transparent group-hover:border-orange-500 transition-colors">
              <AvatarImage src={MOCK_USER.avatar} />
              <AvatarFallback>{MOCK_USER.name[0]}</AvatarFallback>
            </Avatar>
            <div className="hidden lg:block text-left leading-none">
              <p className="text-sm font-semibold">{MOCK_USER.name}</p>
              <p className="text-xs text-gray-500">{MOCK_USER.handle}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;