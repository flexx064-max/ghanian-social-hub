export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  isVerified?: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: string;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  shares: number;
  timestamp: string;
  isLiked?: boolean;
}

export interface Story {
  id: string;
  user: User;
  image: string;
  hasUnseen?: boolean;
}

export interface TrendingTopic {
  id: string;
  name: string;
  postsCount: string;
}

export interface SuggestedUser extends User {
  mutualFriends: number;
}