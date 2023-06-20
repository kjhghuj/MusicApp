import React from 'react';
import SearchComponent from './SearchComponent';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto">
        <SearchComponent />
        {/* 主页其他内容 */}
      </div>
    </div>
  );
};

export default Home;
