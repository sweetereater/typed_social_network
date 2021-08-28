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
    toggleFollow: (id: number) => void

}

const User = (props: UserPropsType) => {
    const {
        id,
        followed,
        name,
        photos: { small }
    } = props;

    return (
        <div className={s.user}>
            <div className={s.photoContainer}>
                <NavLink to={`/user/${id}`}>
                    <img className={s.userPhoto} src={small ? small : userPhoto} alt="" />
                </NavLink>
                <button onClick={() => props.toggleFollow(id)}
                    className={s.toggleFollowButton}>
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