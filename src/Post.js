import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post( {username, caption, imageUrl }) {
    return (
        <div className="post">
           <div className="post__header">
           <Avatar className="post__avatar"
                    alt="{username}"
                    src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg"
            />
            <h3>{username}</h3>
           </div>
            
            <img class="post__image" src={imageUrl} alt=""/>
         
              <h4 class="post__text"><strong>{username}</strong> {caption}</h4>
              
        </div>
    )
}

export default Post
