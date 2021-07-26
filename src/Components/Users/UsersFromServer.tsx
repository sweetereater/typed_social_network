import React from 'react';
import { UserType } from '../../redux/usersPageReducer';
import axios from 'axios';
import Users from './Users';

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



class UsersFromServer extends React.Component<UserCProps, UserCState> {

    loadUsers = (page: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=3`).then(response => {
            const items: Array<UserType> = response.data.items;
            this.props.loadUsers(items);

            if (this.props.lastPage === 10) {
                this.props.changeLastPage(response.data.totalCount);
            }

        });
    }

    componentDidMount() {
        console.log('Mounted!');
        this.loadUsers(this.props.activePage);
    }

    handleClick = (page: number) => {
        this.loadUsers(page);
        this.props.changeActivePage(page);
    }

    render() {
        return <Users
            users={this.props.users}
            activePage={this.props.activePage}
            lastPage={this.props.lastPage}
            handleClick={this.handleClick}
            toggleFollow={this.props.toggleFollow}
        />
    }
}

export default UsersFromServer;