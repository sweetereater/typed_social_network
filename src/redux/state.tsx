import { PostType, StateType, StoreType } from './stateTypes';

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
                { id: 1, author: "Oleg", text: "Heyyooo!" },
                { id: 2, author: "Nadya", text: "How do you do you?" },
                { id: 3, author: "Oleg", text: "Dzzzip Dzaaap" },
                { id: 4, author: "Ilya", text: "Piu piu... piu piu piu!" },
                { id: 6, author: "Nadya", text: 'Meeeowww ~~' },
                { id: 7, author: "Artem", text: 'wow this beer is so tasty' },
                { id: 8, author: "Elya", text: 'gogogoogog' },
                { id: 9, author: "Elya", text: 'Hello from Canada!' },
            ]
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

    addPost(postMessage: string) {
        debugger;
        console.log(this);
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

    onPostTextChange(text: string) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this.getState());
    },

    changeActiveDialog(author: string) {
        const newActiveAuthor = this._state.dialogsPage.dialogsData.find(dialog => dialog.name === author);
        this._state.dialogsPage.activeDialog = newActiveAuthor ? newActiveAuthor : { id: 1, name: "Nadya" };
        this._callSubscriber(this.getState());

    },

};

export default store;
