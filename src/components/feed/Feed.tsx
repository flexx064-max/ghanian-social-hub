import React from "react";
import Stories from "./Stories";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import { MOCK_POSTS } from "../../data/mockData";
import { motion } from "framer-motion";

const Feed: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-6 px-4">
      {/* Stories Section */}
      <Stories />

      {/* Create Post Section */}
      <CreatePost />

      {/* Posts List */}
      <div className="space-y-4">
        {MOCK_POSTS.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feed;