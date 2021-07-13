import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { postType } from '../../redux/stateTypes'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';


type MyPostsPropsType = {
    posts: Array<postType>
    newPostText: string
    addPost: (text: string) => void
    onNewPostTextChange: (text: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let textField = React.createRef();

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
        props.addPost(props.newPostText);
    }

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value;
        props.onNewPostTextChange(newText);
    }

    return (
        <div className={s.posts}>
            My Posts
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={handleTextAreaChange}
                    />
                </div>
                <div>
                    <button onClick={handleClick}>Add new post</button>
                </div>
            </div>
            {postView}
        </div>
    )
}

export default MyPosts;