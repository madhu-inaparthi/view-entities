import React, { useState } from 'react';

const LikeButton = ({ isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: liked ? 'red' : 'lightgray',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {liked ? 'Liked ❤' : 'Like ♡'}
    </button>
  );
};

export default LikeButton;