import React, { useState , useEffect } from 'react';
import './App.css';
import Post from './Post';
import { auth, db } from './firebase';
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ImageUpload from './ImageUpload';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [post, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [ openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
       if(authUser) {
         // user has logged in ...
         console.log(authUser);
         // eslint-disable-next-line no-undef
         setUser(authUser);
       } else {
         // user has logged out ...
         // eslint-disable-next-line no-undef
         setUser(null);
       }
    })
    return () => {
      unsubscribe();
    }
  // eslint-disable-next-line no-undef
  }, [user, username]);

  useEffect(() => {
      db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({
            id: doc.id, 
            post :doc.data()
          })));
      });
  }, []);

  const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message));
    setOpen(false);
  }
  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message));
    setOpenSignIn(false);
  }

  return (
    <div className="App">   
      {user?.displayName ? (
               <ImageUpload username = {user.displayName} />
      ) : (
        <h3>Sorry you need to login to upload</h3>
      )}
      <Modal 
          open={open}
          onClose={() => setOpen(false)}> 
          <div style={modalStyle} className={classes.paper}>
              <form className="app__signup">
                    <center>
                          <img className="app__headerImage" 
                          src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" 
                          alt=""/> 
                    </center>     
                          <Input 
                          placeholder="username" 
                          type="text"
                          // eslint-disable-next-line no-undef
                          value={username}
                          // eslint-disable-next-line no-undef
                          onChange={(e) => setUsername(e.target.value)}
                          />
                          <Input 
                          placeholder="email" 
                          type="text"
                          // eslint-disable-next-line no-undef
                          value={email}
                          // eslint-disable-next-line no-undef
                          onChange={(e) => setEmail(e.target.value)}
                          />

                          <Input 
                          placeholder="password" 
                          type="password"
                          // eslint-disable-next-line no-undef
                          value={password}
                          // eslint-disable-next-line no-undef
                          onChange={(e) => setPassword(e.target.value)}
                          />
                          <Button type="submit" onClick={signUp}>Sign Up</Button>
                   
              </form>
          </div>
      </Modal>
              <Modal 
          open={openSignIn}
          onClose={() => setOpenSignIn(false)}> 
          <div style={modalStyle} className={classes.paper}>
              <form className="app__signup">
                    <center>
                          <img className="app__headerImage" 
                          src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" 
                          alt=""/> 
                    </center>     
                          <Input 
                          placeholder="email" 
                          type="text"
                          // eslint-disable-next-line no-undef
                          value={email}
                          // eslint-disable-next-line no-undef
                          onChange={(e) => setEmail(e.target.value)}
                          />
                          <Input 
                          placeholder="password" 
                          type="password"
                          // eslint-disable-next-line no-undef
                          value={password}
                          // eslint-disable-next-line no-undef
                          onChange={(e) => setPassword(e.target.value)}
                          />
                          <Button type="submit" onClick={signIn}>Sign In</Button>
                   
              </form>
          </div>
      </Modal>
        <div className="app__header">
            <img className="app__headerImage" 
              src="https://pngimage.net/wp-content/uploads/2018/06/nome-instagram-png-4.png" alt=""/>
            { user ? (
              <Button onClick={() => auth.signOut()}>Logout</Button>
            ) : (
              <div className="app__loginContainer">
                  <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
                  <Button onClick={() => setOpen(true)}>Sign Up</Button>
              </div>
            )}
        </div>

        <h1>Hello From Icreatesites4u</h1>

        { 
          post.map(({id, post}) => {
             return <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
          })
        }
    </div>
  );
}

export default App;
