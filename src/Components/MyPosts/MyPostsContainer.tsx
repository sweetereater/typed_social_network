import { PostType } from '../../redux/stateTypes'
import { addNewPost, updateNewPostText } from '../../redux/myPostsReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { storeType } from '../../redux/redux-store';

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

const mapStateToProps = (state: storeType): MapStateToPropsType => {
    return {
        posts: state.myPosts.posts,
        newPostText: state.myPosts.newPostText
    }
}

const dispatchProps = {
    addNewPost,
    updateNewPostText
}

const MyPostsContainer = connect(mapStateToProps, dispatchProps)(MyPosts);


export default MyPostsContainer;