import React from 'react';
import './Story.css';

// Define a simple Story component
function Story({ image, profileSrc, title }) {
  return (
    <div className='story'>
      <img className='story__image' src={image} alt='' />
      <h4 className='story__title'>{title}</h4>
    </div>
  );
} 

function StoryReel() {
  return (
    <div className='storyReel'>
      {/* Use the Story component */}
      <Story
        image ='https://images.unsplash.com/photo-1612144431180-2d672779556c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hbGwlMjBzaXplfGVufDB8fDB8fHww&w=1000&q=80'
        profileSrc='https://us.123rf.com/450wm/photochicken/photochicken2008/photochicken200800065/153425631-pritty-young-asian-photographer-girl-teen-travel-with-camera-trip-take-a-photo-tourist-lifestyle.jpg?ver=6'
        title='Camera 1'
      />



<Story
        image='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
        profileSrc='https://us.123rf.com/450wm/photochicken/photochicken2008/photochicken200800065/153425631-pritty-young-asian-photographer-girl-teen-travel-with-camera-trip-take-a-photo-tourist-lifestyle.jpg?ver=6'
        title='Camera 1'
      />



<Story
        image='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
        profileSrc='https://us.123rf.com/450wm/photochicken/photochicken2008/photochicken200800065/153425631-pritty-young-asian-photographer-girl-teen-travel-with-camera-trip-take-a-photo-tourist-lifestyle.jpg?ver=6'
        title='Camera 1'
      />


<Story
        image='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
        profileSrc='https://us.123rf.com/450wm/photochicken/photochicken2008/photochicken200800065/153425631-pritty-young-asian-photographer-girl-teen-travel-with-camera-trip-take-a-photo-tourist-lifestyle.jpg?ver=6'
        title='Camera 1'
        
      />



<Story
        image='https://i0.wp.com/www.megavoxels.com/wp-content/uploads/2022/05/how-to-make-pixel-art-photoshop-6.jpeg?w=256&ssl=1'
        profileSrc='https://us.123rf.com/450wm/photochicken/photochicken2008/photochicken200800065/153425631-pritty-young-asian-photographer-girl-teen-travel-with-camera-trip-take-a-photo-tourist-lifestyle.jpg?ver=6'
        title='Camera 1'
      />

      {/* Add more Story components here */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
}

export default StoryReel;
