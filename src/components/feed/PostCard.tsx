import React, { useState } from "react";
import { Post } from "../../types";
import { Card } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Heart, MessageCircle, Share2, MoreHorizontal, CheckCircle2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <Card className="border-none shadow-sm bg-white rounded-2xl mb-4 overflow-hidden">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 border border-gray-100">
              <AvatarImage src={post.user.avatar} />
              <AvatarFallback>{post.user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-1">
                <p className="font-bold text-gray-900 leading-none">{post.user.name}</p>
                {post.user.isVerified && <CheckCircle2 className="w-3 h-3 text-orange-500" />}
              </div>
              <p className="text-xs text-gray-500 mt-1">{post.user.handle} • {post.timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </Button>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <p className="text-gray-800 text-[15px] leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
          
          {post.image && (
            <div className="rounded-xl overflow-hidden border border-gray-100">
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full h-auto object-cover max-h-[400px]"
              />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 mt-4 pt-3 border-t border-gray-50">
          <button 
            onClick={handleLike}
            className={cn(
              "flex items-center gap-2 text-sm transition-colors",
              isLiked ? "text-orange-500" : "text-gray-500 hover:text-orange-500"
            )}
          >
            <motion.div whileTap={{ scale: 1.4 }}>
              <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
            </motion.div>
            <span className="font-medium">{likesCount.toLocaleString()}</span>
          </button>
          
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">{post.comments.length.toLocaleString()}</span>
          </button>

          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="font-medium">{post.shares.toLocaleString()}</span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;