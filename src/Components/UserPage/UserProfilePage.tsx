import { UserProfileType } from '../../redux/userProfileReducer';
import s from './UserPage.module.css';
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons'


type UserPagePropsType = {
    profile: UserProfileType
}

const UserProfilePage = (props: UserPagePropsType) => {
    const {
        aboutMe,
        fullName,
        photos,
        lookingForAJob,
        lookingForAJobDescription,
    } = props.profile;

    return (
        <div className={s.userProfileInfo}>
            <img className={s.userProfilePhoto} src={photos.large} alt={fullName} />

            <div className={s.userInformationContainer}>
                <div className={s.userInformation}>
                    <h1 className={s.userProfileFullName}>{fullName}</h1>
                    <h3>About: {aboutMe}</h3>
                    <p>Текущий статус: {lookingForAJob ? "Ищу работу" : "Не ищу работу"}</p>
                    <p>Описание: {lookingForAJobDescription}</p>
                </div>

                <div className={s.userContacts}>
                    <InstagramOutlined style={{ fontSize: "2rem", cursor: "pointer", }} />
                    <FacebookOutlined style={{ fontSize: "2rem", marginLeft: "0.5rem", cursor: "pointer", }} />
                    <YoutubeOutlined style={{ fontSize: "2rem", marginLeft: "0.5rem", cursor: "pointer", }} />
                </div>

            </div>
        </div>
    )
}

export default UserProfilePage;