import { connect } from "react-redux"
import { loadUsers, toggleFollow, changeActivePage, changeLastPage, UserPagePropsType, setFetchingStatus } from "../../redux/usersPageReducer";
import { storeType } from "../../redux/redux-store";
import Users from "./UsersFromServer";



const mapStateToProps = (state: storeType): UserPagePropsType => {
    return {
        users: state.usersPage.users,
        activePage: state.usersPage.activePage,
        lastPage: state.usersPage.lastPage,
        isFetching: state.usersPage.isFetching
    }
}

const dispatchProps = {
    toggleFollow,
    loadUsers,
    changeActivePage,
    changeLastPage,
    setFetchingStatus
}

const UsersContainer = connect(mapStateToProps, dispatchProps)(Users);

export default UsersContainer