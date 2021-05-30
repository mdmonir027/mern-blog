import React from 'react';
import RecentPosts from './components/recentPosts/RecentPosts';
import TopAuthors from './components/topAuthors/TopAuthors';

const Sidebar = () => {
  return (
    <div>
      <RecentPosts />
      <TopAuthors />
    </div>
  );
};

export default Sidebar;
