import React from 'react';
import { UserType } from '../../redux/usersPageReducer';
import s from './Users.module.css';
import userPhoto from '../../assets/images/kitty.jpg';
import axios from 'axios';

interface UserCProps {
    users: Array<UserType>
    toggleFollow: (id: number) => void
    loadUsers: (users: Array<UserType>) => void
    changeActivePage: (page: number) => void
    changeLastPage: (page: number) => void
    activePage: number
    lastPage: number
}

interface UserCState {
    page: number
}



class Users extends React.Component<UserCProps, UserCState> {

    constructor(props: UserCProps) {
        super(props);
        console.log('Constructed');
    }
    loadUsers = (page: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=3`).then(response => {
            const items: Array<UserType> = response.data.items;
            this.props.loadUsers(items);

            if (this.props.lastPage === 5) {
                this.props.changeLastPage(response.data.totalCount);
            }

        });
    }

    componentDidMount() {
        console.log('Mounted!');
        this.loadUsers(this.props.activePage);
    }

    createPaginationButtons(page: number, step: number, maxPage: number) {
        const result = [];
        for (let i = page - step; i <= page + step; i++) {
            if (i > 0 && i <= maxPage) {
                result.push(i);
            }
        }
        return result;
    }

    handleClick = (page: number) => {
        this.loadUsers(page);
        this.props.changeActivePage(page);
    }

    getPaginationButtons() {

        return (
            this.createPaginationButtons(this.props.activePage, 4, this.props.lastPage).map(item => {
                const classes = this.props.activePage === item ? `${s.pageButton} ${s.selectedPage}` : `${s.pageButton}`;
                return <button
                    key={item}
                    onClick={() => this.handleClick(item)}
                    className={classes}>
                    {item}
                </button>
            })
        )

    }

    render() {
        console.log('rendered')
        return (
            <div className={s.users}>
                <div className={s.paginationPanel}>
                    {this.getPaginationButtons()}
                </div>
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

export default Users;