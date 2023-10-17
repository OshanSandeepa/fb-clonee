import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets  from './Widgets';
import { Login } from '@mui/icons-material';


function App() {
  const user="Oshan";
  return (
    //BEM naming convention
    <div className="app">
     {!user ? (


      <Login/>


     ) :(

        
    
    
        <>
     
    <Header/>


    <div className="app__body">
    <Sidebar/> 
<Feed/>



     <Widgets/>

    



</div>    </>   


     )
     
     }






    </div>
  );
}

export default App;
