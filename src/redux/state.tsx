import {
    PostType,
    StateType,
    StoreType,
    ActionTypes,
    AddPostT,
    UpdateNewPostTextT,
    ChangeActiveDialogT,
    UpdateNewMessageTextT,
    AddNewMessageT,

} from './stateTypes';

// importing action.type values
import {
    ADD_POST,
    UPDATE_NEW_POST_TEXT,
    CHANGE_ACTIVE_DIALOG,
    UPDATE_NEW_MESSAGE_TEXT,
    ADD_NEW_MESSAGE
} from './stateTypes';


const store: StoreType = {
    _state: {
        profilePage: {
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
                }

            ],
            newPostText: "it-kamasutra :)"
        },
        dialogsPage: {
            activeDialog: {
                id: 2,
                name: "Oleg"
            },
            dialogsData: [
                { id: 1, name: "Nadya" },
                { id: 2, name: "Oleg" },
                { id: 3, name: "Artem" },
                { id: 4, name: "Elya" },
                { id: 5, name: "Ilya" },
            ],
            messages: [
                { id: 1, authorId: 2, text: "Heyyooo!" },
                { id: 2, authorId: 1, text: "How do you do you?" },
                { id: 3, authorId: 2, text: "Dzzzip Dzaaap" },
                { id: 4, authorId: 5, text: "Piu piu... piu piu piu!" },
                { id: 6, authorId: 1, text: 'Meeeowww ~~' },
                { id: 7, authorId: 3, text: 'wow this beer is so tasty' },
                { id: 8, authorId: 4, text: 'gogogoogog' },
                { id: 9, authorId: 4, text: 'Hello from Canada!' },
            ],
            newMessageText: ""
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber(state: StateType) {
        console.log('waiting for changes');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionTypes) {
        switch (action.type) {
            case ADD_POST:
                this._addPost(action.text);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._onPostTextChange(action.text);
                break;
            case CHANGE_ACTIVE_DIALOG:
                this._changeActiveDialog(action.authorId);
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._updateNewMsgText(action.newMessageText);
                break;
            case ADD_NEW_MESSAGE:
                this._addNewMsg();
                break;
        }
    },

    _addPost(postMessage: string) {
        const randomNum = Math.floor(Math.random() * 100)

        const newPost: PostType = {
            id: this._state.profilePage.posts.length + 1,
            text: postMessage,
            likesCount: 0,
            imgSrc: `http://www.thaicybergames.com/dota/images/heroes/${randomNum}.jpg`
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this.getState());
    },

    _onPostTextChange(text: string) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this.getState());
    },

    _changeActiveDialog(authorId: number) {
        const newActiveAuthor = this._state.dialogsPage.dialogsData.find(dialog => dialog.id === authorId);
        this._state.dialogsPage.activeDialog = newActiveAuthor ? newActiveAuthor : { id: 1, name: "Nadya" };
        this._callSubscriber(this.getState());

    },

    _updateNewMsgText(newMessageText: string) {
        this._state.dialogsPage.newMessageText = newMessageText;
        this._callSubscriber(this.getState());
    },

    _addNewMsg() {
        if (this._state.dialogsPage.newMessageText) {
            const newMsg = {
                id: this._state.dialogsPage.messages.length + 1,
                authorId: this._state.dialogsPage.activeDialog.id,
                text: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages = [...this._state.dialogsPage.messages, newMsg];
            this._state.dialogsPage.newMessageText = "";

            this._callSubscriber(this.getState());
        }

    }

};

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

export const changeActiveDialogAC = (id: number): ChangeActiveDialogT => {
    return {
        type: CHANGE_ACTIVE_DIALOG,
        authorId: id
    }
}

export const updateNewPostTextAC = (text: string): UpdateNewPostTextT => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text
    }
}

export const updateNewMessageTextAC = (text: string): UpdateNewMessageTextT => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}

export const addNewMessageAC = (): AddNewMessageT => {
    return {
        type: ADD_NEW_MESSAGE,
    }
}



export default store;
