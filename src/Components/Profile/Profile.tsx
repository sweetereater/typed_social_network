import React from 'react';
import s from './Profile.module.css';
import MyPosts from '../MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePagePropsType, ActionType } from '../../redux/stateTypes';

type ProfilePropsType = {
    profilePage: ProfilePagePropsType
    dispatch: (action: ActionType) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <main className={s.main}>
            <img className={s.main__img} src="https://klike.net/uploads/posts/2019-06/1559370578_1.jpg" alt="" />
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </main>
    )
}

export default Profile;