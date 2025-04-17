import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ profileImage, username, content, isLiked }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        maxWidth: '300px',
      }}
    >
      <img
        src={profileImage}
        alt="Profile"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          marginBottom: '10px',
        }}
      />
      <h3>{username}</h3>
      <p>{content}</p>
      <LikeButton isLiked={isLiked} />
    </div>
  );
};

export default PostCard;