import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
        <div className="app__header">
            <img className="app__headerImage" 
              src="https://pngimage.net/wp-content/uploads/2018/06/nome-instagram-png-4.png" alt=""/>
        </div>
        <h1>Hello From Icreatesites4u</h1>
        
        <Post username="Martin F" caption="Wow it works" imageUrl="http://icreatesites4u.com/Image/img_31-05-2020-19-09-17.png"/>
    </div>
  );
}

export default App;
