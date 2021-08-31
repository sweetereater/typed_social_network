import React from 'react';
import UserProfilePage from './UserProfilePage';
import Preloader from '../Preloader/Preloader';
import { UserProfileType } from '../../redux/userProfileReducer';
import { withRouter, RouteComponentProps } from 'react-router';

interface IUserProps {
    isFetching: boolean
    profile: UserProfileType
    loadUserProfileTC: (userId: number) => void
}

interface IUserState {
}

type MatchParamsType = {
    userId: string
}

class UserProfilePageClass extends React.Component<IUserProps & RouteComponentProps<MatchParamsType>, IUserState> {

    componentDidMount() {
        const userIdParam = this.props.match.params.userId;
        this.props.loadUserProfileTC(Number(userIdParam));
    }

    render() {
        return (
            this.props.isFetching ?
                <Preloader /> :
                <UserProfilePage
                    profile={this.props.profile}
                />
        )
    }
}

export default withRouter(UserProfilePageClass);