import {
    ProfilePagePropsType,
    PostType,
    ActionTypes
} from './stateTypes';



const ADD_POST = "Profile/ADD-NEW-MESSAGE";
const UPDATE_NEW_POST_TEXT = "Profile/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "Profile/SET-USER-PROFILE";

export type AddPostT = {
    type: typeof ADD_POST
}

export type UpdateNewPostTextT = {
    type: typeof UPDATE_NEW_POST_TEXT
    text: string
}


const initialState = {
    posts: [
        {
            id: 1,
            text: "Hello World!",
            likesCount: 5,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/72.jpg"
        },
        {
            id: 2,
            text: "По-тихонечку едем",
            likesCount: 8,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/101.jpg"
        },
        {
            id: 3,
            text: "React is nice",
            likesCount: 12,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/80.jpg"
        },
        {
            id: 4,
            text: "Как Ваши дела?",
            likesCount: 6,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/55.jpg"
        },
        {
            id: 5,
            text: "Почти 25% пути самурая, юхууу!",
            likesCount: 9,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/43.jpg"
        },
        {
            id: 6,
            text: "Почти 40% пути, еее. Становится сложнее и интереснее",
            likesCount: 15,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/12.jpg"
        },
        {
            id: 7,
            text: "50% позади!",
            likesCount: 19,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/23.jpg"
        },
        {
            id: 8,
            text: "60% (27.07)!",
            likesCount: 24,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/48.jpg"
        },
        {
            id: 9,
            text: "59 выпуск, (24.08.21)... comeback :)",
            likesCount: 20,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/52.jpg"
        },
        {
            id: 10,
            text: "65 выпуск, (31.08.21) all about redux-thunk",
            likesCount: 17,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/84.jpg"
        },


    ],
    newPostText: "it-kamasutra :)",
    profile: null
};

const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionTypes): ProfilePagePropsType => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                const randomNum = Math.floor(Math.random() * 100)
                const newPost: PostType = {
                    id: state.posts.length + 1,
                    text: state.newPostText,
                    likesCount: 0,
                    imgSrc: `http://www.thaicybergames.com/dota/images/heroes/${randomNum}.jpg`
                }
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ""
                };
            }

            return state;

        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.text };


        default:
            return state;
    }
}

export const addNewPost = (): AddPostT => {
    return {
        type: ADD_POST
    }
}


export const updateNewPostText = (text: string): UpdateNewPostTextT => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text
    }
}

export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export default profileReducer;