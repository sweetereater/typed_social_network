import { connect } from "react-redux";
import UserProfilePageClass from "./ProfilePageClass";
import { loadUserProfileTC, getProfileStatusTC, updateProfileStatusTC, ProfileType } from "../../redux/profilePageReducer";
import { storeType } from '../../redux/redux-store';

type MapStateToPropsType = {
    isFetching: boolean
    profile: ProfileType
    id: number | null
    status: string
}

const mapStateToProps = (state: storeType): MapStateToPropsType => {
    return {
        isFetching: state.profilePage.isFetching,
        profile: state.profilePage.profile,
        id: state.auth.id,
        status: state.profilePage.status
    }
}

const dispatchToProps = {
    loadUserProfileTC,
    getProfileStatusTC,
    updateProfileStatusTC,
}

const UserPageProfileContainer = connect(mapStateToProps, dispatchToProps)(UserProfilePageClass);

export default UserPageProfileContainer;