import React from 'react';

const Home = () => {
  const handleSearch = (event) => {
    // 处理搜索逻辑
  };

  return (
    <div>
      <h1>Music App</h1>
      <input type="text" placeholder="Search" onChange={handleSearch} />
      {/* 其他组件内容 */}
    </div>
  );
};

export default Home;
