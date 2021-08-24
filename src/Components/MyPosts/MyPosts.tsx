import React, { ChangeEvent, KeyboardEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { PostType } from '../../redux/stateTypes'


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addNewPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postView = props.posts.map(post => {
        return <Post
            id={post.id}
            key={post.id}
            text={post.text}
            likesCount={post.likesCount}
            imgSrc={post.imgSrc}
        />
    })

    const handleClick = () => {
        props.addNewPost();
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newText = e.currentTarget.value;
        props.updateNewPostText(newText);
    }

    const handleInputKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            props.addNewPost();
        }
    }

    return (
        <div className={s.postsContainer}>
            <div className={s.newPostForm}>
                <input
                    className={s.addPostInput}
                    value={props.newPostText}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                    placeholder="What's new, friend?"
                />
                <button
                    onClick={handleClick}
                    className={s.addPostButton}>
                    Add new post
                </button>
            </div>

            <h3 className={s.myPostsTitle}>My Posts</h3>

            <div className={s.posts}>  {postView}  </div>
        </div>
    )
}

export default MyPosts;