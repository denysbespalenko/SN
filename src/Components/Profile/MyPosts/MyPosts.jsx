import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi how are you? ', likeCount: '15'},
        {id: 1, message: 'It\'s my first post! ', likeCount: '12'},
        {id: 1, message: 'WTF! ', likeCount: '12'},
        {id: 1, message: 'Goaway ', likeCount: '12'},

    ];
    let postsElements = posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>);
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