# Social Media App with Geo-Gate - Implementation Plan

## Overview
Implement a Pan-African social media application with geographic access control via Supabase Edge Functions and a modern React UI.

## Tech Stack
- React 19, Vite, Tailwind CSS
- Lucide React (Icons), Framer Motion (Animations)
- Supabase (Edge Functions)
- Shadcn UI (Components)

## Implementation Steps

### 1. Type Definitions & Mock Data
- [ ] Define interfaces for `User`, `Post`, `Story`, `Comment` in `src/types/index.ts`.
- [ ] Create realistic Pan-African mock data in `src/data/mockData.ts` using generated images.

### 2. Edge Function (Geo-Gate)
- [ ] Implement `supabase/functions/geo-gate/index.ts`.
- [ ] Use `req.headers.get('cf-ipcountry')` or similar to detect region.
- [ ] List allowed Pan-African countries.
- [ ] Return 200 for allowed, 403 for restricted.

### 3. Layout Components
- [ ] **Navbar**: Implement search, branding, and user actions.
- [ ] **Sidebar**: Main navigation links.
- [ ] **RightSidebar**: Trending and Suggestions.

### 4. Feed & Posts
- [ ] **Stories**: Horizontal story tray with animations.
- [ ] **CreatePost**: Form for sharing updates.
- [ ] **PostCard**: Detailed post view with interactions.
- [ ] **Feed**: Scrollable list of posts.

### 5. App Logic
- [ ] Implement `App.tsx` with geo-gate check on mount.
- [ ] State management for `isAllowed` and `isLoading`.
- [ ] Error/Restricted view for non-African users.
- [ ] Integrate all components into the main grid layout.

## Design Goals
- Clean, minimal aesthetic.
- Responsive mobile-first design.
- Smooth transitions using Framer Motion.
- Pan-African theme (vibrant accents, relevant content).
