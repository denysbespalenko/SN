import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>);
    return (
        <div className={s.MyPosts}>
            <h3>My posts</h3>
            <textarea cols='60' rows='6'>Put here your message</textarea>
            <button className={s.Button}>Add Post</button>
            <div className={s.MessagesBlock}>
                {postsElements}
            </div>
        </div>
    );
};
export default MyPosts;