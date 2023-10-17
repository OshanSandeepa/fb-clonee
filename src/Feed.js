import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';

// Import the Post component if you have one
import Post from './Post'; // Make sure to use the correct path to the Post component
// import { Message } from '@mui/icons-material';

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      
      {/* Render the Post component */}
      <Post 
        profilePic= " https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"
        message="WOW this works"
        timestamp="This is a timestamp"
        username="oseeeeee"
        image='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg'
      
      
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
