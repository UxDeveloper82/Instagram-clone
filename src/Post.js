import React from 'react'
import './Post.css';

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
             {/* header -> avatar + username*/}
            <img class="post__image" src="http://icreatesites4u.com/Image/img_31-05-2020-19-09-17.png" alt=""/>
              {/* image*/}
            <h4 class="post__text"><strong>Martin F.</strong>Wow Another amazing Posts</h4>
               {/* username + caption */}
        </div>
    )
}

export default Post
