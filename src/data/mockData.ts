import { Post, Story, TrendingTopic, SuggestedUser, User } from "../types";

export const MOCK_USER: User = {
  id: "me",
  name: "Aminata Diallo",
  handle: "@ami_diallo",
  avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/avatar-1-478982b9-1776518553453.webp",
  isVerified: true,
};

export const STORIES: Story[] = [
  {
    id: "s1",
    user: MOCK_USER,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/avatar-1-478982b9-1776518553453.webp",
  },
  {
    id: "s2",
    user: {
      id: "u2",
      name: "Kwame Mensah",
      handle: "@kwame_accra",
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/avatar-2-de48b398-1776518551802.webp",
    },
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/post-image-1-a2dd58a7-1776518555148.webp",
    hasUnseen: true,
  },
  {
    id: "s3",
    user: {
      id: "u3",
      name: "Zainab Yusuf",
      handle: "@zainab_creatives",
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/avatar-3-e15092db-1776518553213.webp",
    },
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/post-image-3-47a16228-1776518552623.webp",
    hasUnseen: true,
  },
];

export const MOCK_POSTS: Post[] = [
  {
    id: "p1",
    user: {
      id: "u2",
      name: "Kwame Mensah",
      handle: "@kwame_accra",
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/avatar-2-de48b398-1776518551802.webp",
      isVerified: true,
    },
    content: "Just finished a productive session at our coworking space in Lagos. The energy here is unmatched! 🚀🌍 #AfricanStartups #TechInnovation",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/post-image-1-a2dd58a7-1776518555148.webp",
    likes: 1240,
    comments: [
      {
        id: "c1",
        userId: "u3",
        userName: "Zainab Yusuf",
        userAvatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/avatar-3-e15092db-1776518553213.webp",
        content: "Love this! The tech scene in Lagos is really booming.",
        timestamp: "2h ago",
      }
    ],
    shares: 85,
    timestamp: "4h ago",
    isLiked: true,
  },
  {
    id: "p2",
    user: {
      id: "u3",
      name: "Zainab Yusuf",
      handle: "@zainab_creatives",
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/avatar-3-e15092db-1776518553213.webp",
    },
    content: "Caught this incredible sunset while traveling through the Serengeti. Africa's beauty is truly a gift. 🌅🦁 #TravelAfrica #Serengeti #NaturePhotography",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/post-image-2-b0c58d9b-1776518552342.webp",
    likes: 4500,
    comments: [],
    shares: 320,
    timestamp: "8h ago",
  },
];

export const TRENDING: TrendingTopic[] = [
  { id: "t1", name: "#TechAfrica", postsCount: "125K" },
  { id: "t2", name: "#LagosFashionWeek", postsCount: "82K" },
  { id: "t3", name: "#AfrobeatsGlobal", postsCount: "250K" },
  { id: "t4", name: "#PanAfricanism", postsCount: "45K" },
  { id: "t5", name: "#NairobiTech", postsCount: "12K" },
];

export const SUGGESTED_USERS: SuggestedUser[] = [
  {
    id: "s1",
    name: "Chidi Okafor",
    handle: "@chidi_codes",
    avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/avatar-2-de48b398-1776518551802.webp",
    mutualFriends: 12,
  },
  {
    id: "s2",
    name: "Fatima Ba",
    handle: "@fatima_designs",
    avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/54d06065-272c-4842-82b6-74c359b187d2/avatar-3-e15092db-1776518553213.webp",
    mutualFriends: 8,
  },
];