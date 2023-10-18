import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';  
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NearMeIcon from '@mui/icons-material/NearMe'; // Corrected the icon name
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Corrected the icon name

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className='post'>
      <div className="post__top">
        <Avatar src={profilePic} className='post__avatar' />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">      
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon /> {/* Corrected icon name */}
          <p>Share</p>
        </div>
        <div clas sName="post__option">
          <AccountCircleIcon />


        
          <ExpandMoreIcon /> {/* Corrected icon name */}
        </div>
      </div>
    </div>
  );
}

export default Post;
