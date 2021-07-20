import { PostType } from '../../redux/stateTypes'
import { addPostAC, updateNewPostTextAC } from '../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { storeType } from '../../redux/redux-store';

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

const mapStateToProps = (state: storeType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


type mapDispatchToPropsType = {
    addNewPost: () => void
    inputChange: (text: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addNewPost: () => {
            dispatch(addPostAC());
        },
        inputChange: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;