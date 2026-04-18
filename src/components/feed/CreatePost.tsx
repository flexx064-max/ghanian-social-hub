import React, { useState } from "react";
import { Card } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { MOCK_USER } from "../../data/mockData";
import { Image, MapPin, Smile, Send } from "lucide-react";
import { toast } from "sonner";

const CreatePost: React.FC = () => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (!content.trim()) return;
    toast.success("Post created successfully! (Mock)");
    setContent("");
  };

  return (
    <Card className="p-4 border-none shadow-sm bg-white rounded-2xl mb-6">
      <div className="flex gap-4">
        <Avatar className="w-10 h-10 flex-shrink-0">
          <AvatarImage src={MOCK_USER.avatar} />
          <AvatarFallback>{MOCK_USER.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening in your corner of Africa?"
            className="w-full bg-transparent border-none focus:ring-0 resize-none text-gray-800 placeholder:text-gray-400 min-h-[80px]"
          />
          <div className="flex items-center justify-between pt-2 border-t border-gray-50">
            <div className="flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-full px-2 sm:px-3">
                <Image className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Photo</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-full px-2 sm:px-3">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Check-in</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-full px-2 sm:px-3">
                <Smile className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Activity</span>
              </Button>
            </div>
            <Button 
              onClick={handlePost} 
              disabled={!content.trim()}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
            >
              Post
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;