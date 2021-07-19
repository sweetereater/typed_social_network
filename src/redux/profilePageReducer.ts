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

const profileReducer = (action: ActionTypes, state: ProfilePagePropsType): ProfilePagePropsType => {
    switch (action.type) {
        case ADD_POST:

            const randomNum = Math.floor(Math.random() * 100)
            const newPost: PostType = {
                id: state.posts.length + 1,
                text: action.text,
                likesCount: 0,
                imgSrc: `http://www.thaicybergames.com/dota/images/heroes/${randomNum}.jpg`
            }

            state.posts.push(newPost);
            state.newPostText = "";

            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
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

export const addPostAC = (text: string): AddPostT => {
    return {
        type: ADD_POST,
        text: text
    }
}

export const updateNewPostTextAC = (text: string): UpdateNewPostTextT => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text
    }
}

export default profileReducer;