import s from './Profile.module.css';
import MyPosts from '../MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type postType = {
    id: number,
    text: string,
    likesCount: number,
    imgSrc: string
}

type ProfilePropsType = {
    posts: Array<postType>
}

const Profile = (props: ProfilePropsType) => {
    return (
        <main className={s.main}>
            <img className={s.main__img} src="https://klike.net/uploads/posts/2019-06/1559370578_1.jpg" alt="" />
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </main>
    )
}

export default Profile;