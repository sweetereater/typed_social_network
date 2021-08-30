import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/images/kitty.jpg';
import s from './User.module.css';
import axios from 'axios';

type UserPropsType = {
    id: number
    photos: {
        small: string | undefined
        large: string | undefined
    }
    followed: boolean
    name: string
    changeFollowStatus: (id: number, status: boolean) => void

}

const User = (props: UserPropsType) => {
    const {
        id,
        followed,
        name,
        photos: { small }
    } = props;


    const handleToggle = (id: number) => {

        const API_KEY = "d0a91802-a331-4b0b-bd82-bbe83d7d11a0"

        if (!followed) {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
                {
                    withCredentials: true,
                    headers: {
                        "API-KEY": API_KEY
                    }
                })
                .then(response => {
                    console.log(response);
                    if (response.data.resultCode === 0) {
                        props.changeFollowStatus(id, true)
                    }
                })
        } else {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                {
                    withCredentials: true,
                    headers: {
                        "API-KEY": API_KEY
                    }
                })
                .then(response => {
                    console.log(response);
                    if (response.data.resultCode === 0) {
                        props.changeFollowStatus(id, false)
                    }
                })
        }
    }


    return (
        <div className={s.user}>
            <div className={s.photoContainer}>
                <NavLink to={`/user/${id}`}>
                    <img className={s.userPhoto} src={small ? small : userPhoto} alt="" />
                </NavLink>
                <button onClick={() => handleToggle(id)}
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