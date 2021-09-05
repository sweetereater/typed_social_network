import { PostType } from '../../redux/stateTypes'
import { addNewPost } from '../../redux/myPostsReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { storeType } from '../../redux/redux-store';

type MapStateToPropsType = {
    posts: Array<PostType>
}

const mapStateToProps = (state: storeType): MapStateToPropsType => {
    return {
        posts: state.myPosts.posts,
    }
}

const dispatchProps = {
    addNewPost
}

const MyPostsContainer = connect(mapStateToProps, dispatchProps)(MyPosts);


export default MyPostsContainer;