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
            <ProfileInfo />
            <MyPostsContainer />
        </main>
    )
}

export default Profile;