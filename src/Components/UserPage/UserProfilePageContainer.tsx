import { connect } from "react-redux";
import UserProfilePageClass from "./UserProfilePageClass";
import { loadUserProfileTC, UserProfileType } from "../../redux/userProfileReducer";
import { storeType } from '../../redux/redux-store';

type MapStateToPropsType = {
    isFetching: boolean
    profile: UserProfileType
}

const mapStateToProps = (state: storeType): MapStateToPropsType => {
    return {
        isFetching: state.userProfilePage.isFetching,
        profile: state.userProfilePage.profile
    }
}

const dispatchToProps = {
    loadUserProfileTC
}

const UserPageProfileContainer = connect(mapStateToProps, dispatchToProps)(UserProfilePageClass);

export default UserPageProfileContainer;