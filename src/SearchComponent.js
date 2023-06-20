import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchComponent = () => {
  const history = useHistory();

  const handleSearch = () => {
    // 在这里执行搜索逻辑
    // ...

    // 跳转到搜索结果页面
    history.push('/search-results');
  };

  return (
    <div className="mt-5 flex items-center">
      <input
        type="text"
        placeholder="请输入歌曲名称"
        className="flex-grow p-2 rounded-l-md bg-green-500 text-black focus:outline-none backdrop-filter backdrop-blur-md bg-opacity-30"
      />
      <button className="p-2 bg-green-600 rounded-r-md text-white" onClick={handleSearch}>
        搜索
      </button>
    </div>
  );
};

export default SearchComponent;
