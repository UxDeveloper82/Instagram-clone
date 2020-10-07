import React, { useState , useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [post, setPosts] = useState([]);
  useEffect(() => {
      db.collection('posts').onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => doc.data()))
      })
  }, []);

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
