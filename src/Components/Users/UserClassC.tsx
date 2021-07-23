import React from 'react';
import { UserType } from '../../redux/usersPageReducer';
import s from './Users.module.css';
import userPhoto from '../../assets/images/kitty.jpg';
import axios from 'axios';

type UserCPropsType = {
    users: Array<UserType>
    toggleFollow: (id: number) => void
    loadUsers: (users: Array<UserType>) => void
}

interface UserCProps {
    users: Array<UserType>
    toggleFollow: (id: number) => void
    loadUsers: (users: Array<UserType>) => void
}

interface UserCState {
}



class UsersC extends React.Component<UserCProps, UserCState> {

    constructor(props: UserCProps) {
        super(props);
        console.log('Constructed');
    }

    componentDidMount() {
        console.log('Mounted!');
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            const items: Array<UserType> = response.data.items;

            this.props.loadUsers(items);
        });
    }

    componentDidUpdate() {
        console.log('Updated!');
    }

    render() {
        console.log('Rendered!')

        return (
            <div className={s.users}>
                {
                    this.props.users.map(user => {
                        return (
                            <div key={user.id} className={s.user}>
                                <div className={s.photoContainer}>
                                    <img src={user.photos.small ? user.photos.small : userPhoto} alt="" />
                                    <button onClick={() => this.props.toggleFollow(user.id)}
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
                }
            </div>
        )
    }
}

export default UsersC;