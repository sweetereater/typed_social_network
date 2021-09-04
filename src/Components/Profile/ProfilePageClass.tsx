import React from 'react';
import ProfilePage from './ProfilePage';
import Preloader from '../Preloader/Preloader';
import { ProfileType } from '../../redux/profilePageReducer';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import s from './ProfilePage.module.css';
import MyPostsContainer from '../MyPosts/MyPostsContainer';

interface IUserProps {
    isFetching: boolean
    profile: ProfileType
    id: number | null
    status: string
    loadUserProfileTC: (userId: number) => void
    getProfileStatusTC: (userId: number) => void
    updateProfileStatusTC: (status: string) => void
}

interface IUserState {
}

type MatchParamsType = {
    profileId: string
}

type UserProfileClassProps = IUserProps & RouteComponentProps<MatchParamsType>

class UserProfilePageClass extends React.Component<UserProfileClassProps, IUserState> {

    getDataFromServer(id: number) {
        this.props.loadUserProfileTC(id);
        this.props.getProfileStatusTC(id);
    }

    componentDidMount() {
        let idForRequest = this.props.id;
        let profileIdParam = Number(this.props.match.params.profileId);
        if (profileIdParam) idForRequest = profileIdParam;
        if (idForRequest) {
            this.getDataFromServer(idForRequest);
        }
    }

    componentDidUpdate(prevProps: UserProfileClassProps, prevState: IUserState) {
        if ((prevProps.match.params !== this.props.match.params) || (this.props.id !== prevProps.id)) {
            if (this.props.id) {
                this.getDataFromServer(this.props.id);
            }
        }
    }

    render() {

        let id = this.props.id;
        let profileId = Number(this.props.match.params.profileId);
        return (
            <div className={s.profilePageContainer}>
                {this.props.isFetching ? <Preloader /> :
                    <>
                        <ProfilePage
                            profile={this.props.profile}
                            status={this.props.status}
                            id={this.props.id}
                            updateNewStatus={this.props.updateProfileStatusTC}
                        />
                        {(!profileId || id === profileId) ? <MyPostsContainer /> : null}
                    </>
                }
            </div>

        )
    }
}

export default withRouter(UserProfilePageClass);