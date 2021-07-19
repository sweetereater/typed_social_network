import {
    StateType,
    StoreType,
    ActionTypes

} from './stateTypes';

import profileReducer from './profilePageReducer';
import dialogsReducer from './dialogsPageReducer';

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this.getState());
    },
};


export default store;
