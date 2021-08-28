import React from 'react';
import axios from 'axios';
import UserPage from './UserPage';
import Preloader from '../Preloader/Preloader';
import { UserProfileType } from '../../redux/userProfileReducer';
import { withRouter, RouteComponentProps } from 'react-router';


interface IUserProps {
    isFetching: boolean
    profile: UserProfileType
    setFetchingStatus: (status: boolean) => void
    loadUserProfileInfo: (profile: UserProfileType) => void
}

interface IUserState {
}

type MatchParamsType = {
    userId: string
}

class UserPageC extends React.Component<IUserProps & RouteComponentProps<MatchParamsType>, IUserState> {

    componentDidMount() {

        this.props.setFetchingStatus(true);

        const userIdParam = this.props.match.params.userId;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userIdParam}`).then(response => {

            this.props.setFetchingStatus(false);
            this.props.loadUserProfileInfo(response.data);

        });
    }


    render() {
        return (
            this.props.isFetching ?
                <Preloader /> :
                <UserPage
                    profile={this.props.profile}
                />
        )
    }
}

export default withRouter(UserPageC);