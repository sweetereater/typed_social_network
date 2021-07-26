import React, { ChangeEvent, KeyboardEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { PostType } from '../../redux/stateTypes'
import { Button, Input } from '@material-ui/core';


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

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value;
        props.updateNewPostText(newText);
    }

    const handleInputKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            props.addNewPost();
        }
    }

    return (
        <div className={s.posts}>
            <div>
                <div className={s.addPostInput}>
                    <Input
                        color="primary"
                        value={props.newPostText}
                        onChange={handleInputChange}
                        onKeyPress={handleInputKeyPress}
                    />
                </div>

                <div className={s.addPostButton}>
                    <Button
                        onClick={handleClick}
                        variant="contained"
                        color="primary"
                    >Add new post</Button>
                </div>
            </div>
            <h3>My Posts</h3>
            {postView}
        </div>
    )
}

export default MyPosts;