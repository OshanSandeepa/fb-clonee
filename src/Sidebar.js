import React from 'react';
import './Sidebar.css'; 
import SidebarRow from './SidebarRow';
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Store, VideoLibrary } from '@mui/icons-material';

function Sidebar() {
  

  return (
    <div className='sidebar'>
      <SidebarRow src='https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1696001804~exp=1696002404~hmac=6392166fe5f373c1f1bad0435781a0b47bae94b233338618223d181c9a98f12f' 
      title='Oshan Sandeepa'/>
      <SidebarRow Icon={LocalHospital} title="Covid 19"/>
      <SidebarRow Icon={EmojiFlags} title='Pages'/>
      <SidebarRow Icon={People} title='Friends'/>
      <SidebarRow Icon={Chat} title='Messenger'/>
      <SidebarRow Icon={Store} title='MarketPlace'/>
      <SidebarRow Icon={VideoLibrary} title='Videos'/>
      <SidebarRow Icon={ExpandMoreOutlined} title="Markett "/>
    </div>
  )
}

export default Sidebar;
