const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const LOAD_USERS = "LOAD-USERS";

export type UserType = {
    id: number
    name: string
    status: string
    location: string
    followed: boolean
    photo: string
}

export type UserPagePropsType = {
    users: Array<UserType>
}

const initialState = {
    users: []
}

const usersReducer = (state: UserPagePropsType = initialState, action: any) => {
    switch (action.type) {
        case LOAD_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.id ? { ...user, followed: !user.followed } : user),
            }
        default:
            return state;
    }
}

export const loadUsersAC = (users: Array<UserType>) => {
    return {
        type: LOAD_USERS,
        users: users
    }
}

export const toggleFollowAC = (userID: number) => {
    return {
        type: TOGGLE_FOLLOW,
        id: userID
    }
}

export default usersReducer;