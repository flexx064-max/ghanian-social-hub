import React from "react";
import { STORIES } from "../../data/mockData";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Plus } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

const Stories: React.FC = () => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-0 scrollbar-hide">
      {/* Create Story */}
      <div className="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group">
        <div className="relative">
          <Avatar className="w-16 h-16 border-2 border-white ring-2 ring-gray-100">
            <AvatarImage src={STORIES[0].user.avatar} />
            <AvatarFallback>Me</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 bg-orange-500 rounded-full p-1 border-2 border-white">
            <Plus className="w-3 h-3 text-white" />
          </div>
        </div>
        <span className="text-xs font-medium text-gray-500">Your Story</span>
      </div>

      {/* Story List */}
      {STORIES.slice(1).map((story) => (
        <motion.div 
          key={story.id} 
          className="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={cn(
            "p-0.5 rounded-full",
            story.hasUnseen ? "bg-gradient-to-tr from-orange-400 to-red-500" : "bg-gray-200"
          )}>
            <Avatar className="w-16 h-16 border-2 border-white">
              <AvatarImage src={story.user.avatar} />
              <AvatarFallback>{story.user.name[0]}</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-xs font-medium text-gray-700 truncate w-16 text-center">
            {story.user.name.split(" ")[0]}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Stories;