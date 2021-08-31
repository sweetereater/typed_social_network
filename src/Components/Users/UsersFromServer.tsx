import React from 'react';
import { UserType } from '../../redux/usersPageReducer';
import s from './Users.module.css';
import Users from './Users';
import Preloader from '../Preloader/Preloader';

interface IUserCProps {
    users: Array<UserType>
    activePage: number
    lastPage: number
    isFetching: boolean
    followProgress: Array<number>

    changeActivePage: (page: number) => void
    changeLastPage: (page: number) => void
    loadUsersTC: (page: number) => void
    setFetchingStatus: (status: boolean) => void
    followUser: (id: number, followStatus: boolean) => void
}

interface UserCState {
    page: number
}



class UsersFromServer extends React.Component<IUserCProps, UserCState> {

    componentDidMount() {
        this.props.loadUsersTC(this.props.activePage);
    }

    handleClick = (page: number) => {
        this.props.loadUsersTC(page);
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
                        followProgress={this.props.followProgress}
                        followUser={this.props.followUser}
                    />
            }
        </div>

    }
}

export default UsersFromServer;