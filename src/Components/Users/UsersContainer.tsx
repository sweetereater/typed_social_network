import { Dispatch } from "redux";
import { connect } from "react-redux"
import { loadUsersAC, toggleFollowAC, changeActivePageAC, changeLastPageAC, UserPagePropsType, UserType } from "../../redux/usersPageReducer";
import { storeType } from "../../redux/redux-store";
import Users from "./Users";



const mapStateToProps = (state: storeType): UserPagePropsType => {
    return {
        users: state.usersPage.users,
        activePage: state.usersPage.activePage,
        lastPage: state.usersPage.lastPage
    }
}


type mapDispatchToPropsType = {
    toggleFollow: (id: number) => void
    loadUsers: (users: Array<UserType>) => void
    changeActivePage: (page: number) => void
    changeLastPage: (page: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        toggleFollow: (id) => {
            dispatch(toggleFollowAC(id))
        },
        loadUsers: (users: Array<UserType>) => {
            dispatch(loadUsersAC(users));
        },
        changeActivePage: (page: number) => {
            dispatch(changeActivePageAC(page));
        },
        changeLastPage: (page: number) => {
            dispatch(changeLastPageAC(page));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer