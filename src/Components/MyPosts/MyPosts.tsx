import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { ActionTypes, PostType } from '../../redux/stateTypes'
import { Button, Input } from '@material-ui/core';
import { addPostAC, updateNewPostTextAC } from '../../redux/state';


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
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
        props.dispatch(addPostAC(props.newPostText));
    }

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value;
        props.dispatch(updateNewPostTextAC(newText));
    }

    return (
        <div className={s.posts}>
            <div>
                <div className={s.addPostInput}>
                    <Input
                        color="primary"
                        value={props.newPostText}
                        onChange={handleInputChange}
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