import React from "react";
import { TRENDING, SUGGESTED_USERS } from "../../data/mockData";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { UserPlus, TrendingUp } from "lucide-react";

const RightSidebar: React.FC = () => {
  return (
    <aside className="hidden xl:flex flex-col w-80 h-[calc(100vh-56px)] sticky top-14 p-4 gap-6 overflow-y-auto">
      {/* Trending Section */}
      <Card className="p-4 border-none shadow-sm bg-white rounded-2xl">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-orange-500" />
          <h3 className="font-bold text-gray-900">Trending in Africa</h3>
        </div>
        <div className="space-y-4">
          {TRENDING.map((topic) => (
            <div key={topic.id} className="group cursor-pointer">
              <p className="text-sm font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                {topic.name}
              </p>
              <p className="text-xs text-gray-500">{topic.postsCount} posts</p>
            </div>
          ))}
        </div>
        <Button variant="link" className="w-full mt-4 text-orange-500 p-0 h-auto">
          Show more
        </Button>
      </Card>

      {/* Suggested Users */}
      <Card className="p-4 border-none shadow-sm bg-white rounded-2xl">
        <h3 className="font-bold text-gray-900 mb-4">Who to follow</h3>
        <div className="space-y-4">
          {SUGGESTED_USERS.map((user) => (
            <div key={user.id} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="max-w-[120px]">
                  <p className="text-sm font-bold truncate">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user.mutualFriends} mutual friends</p>
                </div>
              </div>
              <Button size="icon" variant="secondary" className="rounded-full w-8 h-8 hover:bg-orange-50 hover:text-orange-500">
                <UserPlus className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
        <Button variant="link" className="w-full mt-4 text-orange-500 p-0 h-auto">
          Show more
        </Button>
      </Card>

      {/* Footer Links */}
      <div className="px-4 flex flex-wrap gap-x-4 gap-y-2">
        <a href="#" className="text-xs text-gray-400 hover:underline">Privacy Policy</a>
        <a href="#" className="text-xs text-gray-400 hover:underline">Terms of Service</a>
        <a href="#" className="text-xs text-gray-400 hover:underline">Cookies</a>
        <span className="text-xs text-gray-400">© 2024 Ubuntu Social</span>
      </div>
    </aside>
  );
};

export default RightSidebar;