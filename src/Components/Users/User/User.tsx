import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/images/kitty.jpg';
import s from './User.module.css';

type UserPropsType = {
    id: number
    photos: {
        small: string | undefined
        large: string | undefined
    }
    followed: boolean
    name: string
    followProgress: Array<number>
    followUser: (id: number, followStatus: boolean) => void

}

const User = (props: UserPropsType) => {
    const {
        id,
        followed,
        name,
        photos: { small },
        followProgress
    } = props;

    const handleToggle = (id: number) => {
        props.followUser(id, !followed)
    }

    const isButtonInProgress = followProgress.includes(id);
    let buttonClasses = `${s.toggleFollowButton}`

    if (isButtonInProgress) buttonClasses += ` ${s.disabledButton}`


    return (
        <div className={s.user}>
            <div className={s.photoContainer}>
                <NavLink to={`/user/${id}`}>
                    <img className={s.userPhoto} src={small ? small : userPhoto} alt="" />
                </NavLink>
                <button disabled={isButtonInProgress} onClick={() => handleToggle(id)}
                    className={buttonClasses}>
                    {followed ? "Unfollow" : "Follow"}
                </button>
            </div>
            <div className={s.userDescription}>
                {name}
            </div>
        </div>
    )
}

export default User;