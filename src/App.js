import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [post, setPosts] = useState([
     {
       username: "Martin F",
       caption: "This is Amazing",
       imageUrl: "http://icreatesites4u.com/Image/img_31-05-2020-19-09-17.png"
     },
     {
        username: "Martin B",
        caption: "Another Amazing thing",
        imageUrl: "http://icreatesites4u.com/Image/img_31-05-2020-19-09-17.png"
     }
  ]);
  return (
    <div className="App">
        <div className="app__header">
            <img className="app__headerImage" 
              src="https://pngimage.net/wp-content/uploads/2018/06/nome-instagram-png-4.png" alt=""/>
        </div>
        <h1>Hello From Icreatesites4u</h1>

        { 
          post.map(post => {
             return <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
          })
        }
    </div>
  );
}

export default App;
