import {
    ProfilePagePropsType,
    PostType,
    ActionTypes,
    AddPostT,
    UpdateNewPostTextT
} from './stateTypes';

import {
    ADD_POST,
    UPDATE_NEW_POST_TEXT
} from './stateTypes';

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
        }

    ],
    newPostText: "it-kamasutra :)"
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

// Action Creators (Lesson 39)

// export type AddPostT_useless = {
//     type: "ADD-POST"
//     text: string
// }
// export type AddPostT_uselessFromFunction = ReturnType<typeof addPostAC>

// export const addPostAC = (text: string): AddPostT => {
//     return {
//         type: ADD_POST,
//         text: text
//     }
// }

export const addPostAC = (): AddPostT => {
    return {
        type: ADD_POST
    }
}


export const updateNewPostTextAC = (text: string): UpdateNewPostTextT => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text
    }
}

export default profileReducer;