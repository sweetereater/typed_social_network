import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from '../MyPosts/MyPostsContainer';

// import { ProfilePagePropsType, ActionTypes } from '../../redux/stateTypes';

// type ProfilePropsType = {
//     profilePage: ProfilePagePropsType
//     dispatch: (action: ActionTypes) => void
// }

const Profile: React.FC = (props) => {

    return (
        <main className={s.main}>
            <img className={s.main__img} src="https://klike.net/uploads/posts/2019-06/1559370578_1.jpg" alt="" />
            <ProfileInfo />
            <MyPostsContainer />
        </main>
    )
}

export default Profile;