import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <p>My posts</p>
            <textarea>Put here your message</textarea>
            <button className={s.Button}>Add Post</button>
            <div>
                <Post message='Hi how are you? ' likeCount="15"/>
                <Post message="It's my first post! " likeCount="25"/>
            </div>
        </div>
    );
};
export default MyPosts;