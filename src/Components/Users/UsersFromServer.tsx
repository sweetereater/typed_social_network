import React from 'react';
import { UserType, initialState } from '../../redux/usersPageReducer';
import s from './Users.module.css';
import axios from 'axios';
import Users from './Users';
import Preloader from '../Preloader/Preloader';

interface IUserCProps {
    users: Array<UserType>
    activePage: number
    lastPage: number
    isFetching: boolean
    changeFollowStatus: (id: number, status: boolean) => void
    loadUsers: (users: Array<UserType>) => void
    changeActivePage: (page: number) => void
    changeLastPage: (page: number) => void
    setFetchingStatus: (status: boolean) => void
}

interface UserCState {
    page: number
}



class UsersFromServer extends React.Component<IUserCProps, UserCState> {

    loadUsers = (page: number) => {

        this.props.setFetchingStatus(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=3`, { withCredentials: true })
            .then(response => {
                this.props.setFetchingStatus(false);
                return response.data;
            })
            .then(data => {
                this.props.loadUsers(data.items);
                console.log(data.items);
                if (this.props.lastPage === initialState.lastPage) {
                    this.props.changeLastPage(data.totalCount);
                }
            })

    };

    componentDidMount() {
        this.loadUsers(this.props.activePage);
    }

    handleClick = (page: number) => {
        this.loadUsers(page);
        this.props.changeActivePage(page);
    }

    render() {
        return <div className={s.userPage}>
            {
                this.props.isFetching ?
                    <Preloader /> :
                    <Users
                        users={this.props.users}
                        activePage={this.props.activePage}
                        lastPage={this.props.lastPage}
                        handleClick={this.handleClick}
                        changeFollowStatus={this.props.changeFollowStatus}
                    />
            }
        </div>

    }
}

export default UsersFromServer;