import { connect } from "react-redux"
import { UserPagePropsType, loadUsersTC, changeActivePage, changeLastPage, setFetchingStatus, followUser } from "../../redux/usersPageReducer";
import { storeType } from "../../redux/redux-store";
import Users from "./UsersFromServer";

import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state: storeType): UserPagePropsType => {
    return {
        users: state.usersPage.users,
        activePage: state.usersPage.activePage,
        lastPage: state.usersPage.lastPage,
        isFetching: state.usersPage.isFetching,
        followProgress: state.usersPage.followProgress
    }
}

const dispatchProps = {
    changeActivePage,
    changeLastPage,
    loadUsersTC,
    setFetchingStatus,
    followUser
}


const UsersContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, dispatchProps),
)(Users);

export default UsersContainer;