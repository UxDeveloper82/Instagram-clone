import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className="post">
           <div className="post__header">
           <Avatar className="post__avatar"
                    alt="{username}"
                    src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg"
            />
            <h3>Username</h3>
           </div>
             {/* header -> avatar + username*/}
            <img class="post__image" src="http://icreatesites4u.com/Image/img_31-05-2020-19-09-17.png" alt=""/>
              {/* image*/}
            <h4 class="post__text"><strong>Martin F.</strong>Wow Another amazing Posts</h4>
               {/* username + caption */}
        </div>
    )
}

export default Post
