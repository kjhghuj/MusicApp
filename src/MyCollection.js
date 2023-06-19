import React from 'react';

const MyCollection = () => {
  const myCollection = ['Song 1', 'Song 2', 'Song 3']; // 这里是收藏的歌曲列表

  return (
    <div className='text-red-400'>
      <h1>My Collection</h1>
      {myCollection.map((song, index) => (
        <div key={index}>{song}</div>
      ))}
    </div>
  );
};

export default MyCollection;
