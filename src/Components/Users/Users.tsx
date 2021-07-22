import axios from 'axios';
import { UserType } from '../../redux/usersPageReducer';
import s from './Users.module.css';
import userPhoto from '../../assets/images/kitty.jpg';



type UsersPropsType = {
    users: Array<UserType>
    toggleFollow: (id: number) => void
    loadUsers: (users: Array<UserType>) => void
}

const Users = (props: UsersPropsType) => {

    if (!props.users.length) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            const items: Array<UserType> = response.data.items;

            props.loadUsers(items);
        });

    }

    const usersView = props.users.map(user => {
        return (
            <div key={user.id} className={s.user}>
                <div className={s.photoContainer}>
                    <img src={user.photos.small ? user.photos.small : userPhoto} alt="" />
                    <button onClick={() => props.toggleFollow(user.id)}
                        className={s.toggleFollow}>
                        {user.followed ? "Unfollow" : "Follow"}
                    </button>
                </div>
                <div className={s.userDescription}>
                    {user.name} <br />
                </div>
            </div>
        )
    })
    return (
        <div className={s.users}>
            {usersView}
        </div>
    )
}

export default Users;