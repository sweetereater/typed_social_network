import { connect } from "react-redux";
import UserPageC from "./UserPageClass";
import { UserProfileStateType, setFetchingStatus, loadUserProfileInfo, UserProfileType } from "../../redux/userProfileReducer";
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

type DispatchToPropsType = {
    setFetchingStatus: (status: boolean) => void
    loadUser: (profile: UserProfileType) => void
}

const dispatchToProps = {
    setFetchingStatus,
    loadUserProfileInfo
}

const UserPageProfileContainer = connect(mapStateToProps, dispatchToProps)(UserPageC);

export default UserPageProfileContainer;