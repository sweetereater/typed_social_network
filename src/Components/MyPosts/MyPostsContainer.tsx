import React from 'react';
import { ActionTypes, PostType } from '../../redux/stateTypes'
import { addPostAC, updateNewPostTextAC } from '../../redux/profilePageReducer';
import MyPosts from './MyPosts'


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    console.log('Inside container ');

    const handleClick = () => {
        props.dispatch(addPostAC(props.newPostText));
    }

    const handleInputChange = (newText: string) => {
        props.dispatch(updateNewPostTextAC(newText));
    }

    return (
        <MyPosts
            posts={props.posts}
            newPostText={props.newPostText}
            addNewPost={handleClick}
            inputChange={handleInputChange} />
    )
}

export default MyPostsContainer;