
import {
    ProfilePagePropsType,
    PostType,
} from './stateTypes';


const ADD_POST = "Profile/ADD_NEW_MESSAGE";

export type AddPostT = {
    type: typeof ADD_POST,
    text: string
}

type ProfilePageReducerActionsType = AddPostT


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
        {
            id: 11,
            text: "70+ выпуск, (31.08.21) HOC + compose",
            likesCount: 13,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/95.jpg"
        },
        {
            id: 12,
            text: "78 выпуск, (05.09.21) +login-logout",
            likesCount: 21,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/103.jpg"
        },
        {
            id: 13,
            text: "87 выпуск, (06.09.21) не ознакомился с библиотекой reselect(83 выпуск), пошел дальше",
            likesCount: 18,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/109.jpg"
        },


    ]
};

const myPostsReducer = (state: ProfilePagePropsType = initialState, action: ProfilePageReducerActionsType): ProfilePagePropsType => {
    switch (action.type) {
        case ADD_POST:
            const randomNum = Math.floor(Math.random() * 100)
            const newPost: PostType = {
                id: state.posts.length + 1,
                text: action.text,
                likesCount: 0,
                imgSrc: `http://www.thaicybergames.com/dota/images/heroes/${randomNum}.jpg`
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        default:
            return state;
    }
}

export const addNewPost = (text: string): AddPostT => {
    return {
        type: ADD_POST,
        text
    }
}


export default myPostsReducer;