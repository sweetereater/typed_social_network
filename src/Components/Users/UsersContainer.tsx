import { Dispatch } from "redux";
import { connect } from "react-redux"
import Users from "./Users";
import { loadUsersAC, toggleFollowAC, UserPagePropsType, UserType } from "../../redux/usersPageReducer";
import { storeType } from "../../redux/redux-store";



const mapStateToProps = (state: storeType): UserPagePropsType => {
    return {
        users: state.usersPage.users
    }
}


type mapDispatchToPropsType = {
    toggleFollow: (id: number) => void
    loadUsers: (users: Array<UserType>) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        toggleFollow: (id) => {
            dispatch(toggleFollowAC(id))
        },
        loadUsers: (users: Array<UserType>) => {
            dispatch(loadUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer