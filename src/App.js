import React from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets  from './Widgets';




function App() {
  const user=null;
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
