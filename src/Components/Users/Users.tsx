import { UserType } from '../../redux/usersPageReducer';
import s from './Users.module.css';


type UsersPropsType = {
    users: Array<UserType>
    toggleFollow: (id: number) => void
    loadUsers: (users: Array<UserType>) => void
}

const Users = (props: UsersPropsType) => {

    if (!props.users.length) {
        props.loadUsers([
            {
                id: 1,
                name: "Olga",
                status: "sister",
                location: "Novy Urengoy",
                followed: true,
                photo: "https://i.pinimg.com/564x/74/97/fc/7497fccaa09be72c2a17e57c9be11a49.jpg",
            },
            {
                id: 2,
                name: "Fedor",
                status: "unknown",
                location: "Voronezh",
                followed: false,
                photo: "https://i.pinimg.com/564x/74/97/fc/7497fccaa09be72c2a17e57c9be11a49.jpg",

            },
            {
                id: 3,
                name: "Dmitry",
                status: "teacher",
                location: "Minsk",
                followed: true,
                photo: "https://i.pinimg.com/564x/74/97/fc/7497fccaa09be72c2a17e57c9be11a49.jpg",

            },
            {
                id: 4,
                name: "Oleg",
                status: "friend",
                location: "Moscow",
                followed: false,
                photo: "https://i.pinimg.com/564x/74/97/fc/7497fccaa09be72c2a17e57c9be11a49.jpg",
            }
        ]);
    }

    const usersView = props.users.map(user => {
        return (
            <div key={user.id} className={s.user}>
                <div className={s.photoContainer}>
                    <img src={user.photo} alt="" />
                    <button onClick={() => props.toggleFollow(user.id)}
                        className={s.toggleFollow}>
                        {user.followed ? "Unfollow" : "Follow"}
                    </button>
                </div>
                <div className={s.userDescription}>
                    {user.name} <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam perspiciatis eaque, error sapiente rerum hic.
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