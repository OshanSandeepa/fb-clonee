import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { InsertEmoticon } from '@mui/icons-material';

function MessageSender() {
    const[input,setInput]=useState('');
    const[imageUrl,setimageUrl]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //some clver db stuff
    setInput("");
    setimageUrl("");


  };

  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar />

        <form>
          <input
            value={input}

            onChange={e=>setInput(e.target.value)}
            className='messageSender__input'
            placeholder={"What's on your mind?"}
          />
          
          <input 
             value={imageUrl}
             onChange={e=>setimageUrl(e.target.value)}
              
          
          
          placeholder='Image URL (optional)' />
          <button onClick={handleSubmit} type='submit'>
            Hidden Submit
          </button>
        </form>
      </div>

      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>

        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo / Video</h3>
        </div>

        <div className='messageSender__option'>
          <InsertEmoticon style={{ color: 'orange' }} />
          <h3>Feeling /Activity</h3>
        </div>








      </div>
    </div>
  );
}

export default MessageSender;
