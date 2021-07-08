import s from './Profile.module.css';
import MyPosts from '../MyPosts/MyPosts';

const Profile = () => {
    return (
        <main className={s.main}>
            <img className={s.main__img} src="https://klike.net/uploads/posts/2019-06/1559370578_1.jpg" alt="" />
            <div className={s.profile_info}>
                <div className={s.img_container}>
                    <img
                        src="https://legacy.mortalkombatonline.com/content/games/mk3/cyrax/bio.gif"
                        alt=""
                        className={s.img_container__img}
                    />
                </div>
                <div className={s.desc}>
                    <h1>Privet!</h1>
                </div>
            </div>
            <MyPosts />
        </main>
    )
}

export default Profile;