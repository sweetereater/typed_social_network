import React from 'react';
import { stateType } from './stateTypes';

let rerenderEntireTree = (state: stateType) => {
    console.log('??');
}

const data = {
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
            id: 1,
            name: "Nadya"
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
};

export const addPost = (postMessage: string) => {

    const randomNum = Math.floor(Math.random() * 100)

    const newPost = {
        id: data.profilePage.posts.length + 1,
        text: postMessage,
        likesCount: 0,
        imgSrc: `http://www.thaicybergames.com/dota/images/heroes/${randomNum}.jpg`
    }

    data.profilePage.posts.push(newPost);
    data.profilePage.newPostText = "";
    rerenderEntireTree(data);
}


export const onPostTextChange = (text: string) => {
    data.profilePage.newPostText = text;
    rerenderEntireTree(data);
}

export const changeActiveDialog = (author: string) => {
    const newActiveAuthor = data.dialogsPage.dialogsData.find(dialog => dialog.name === author);
    data.dialogsPage.activeDialog = newActiveAuthor ? newActiveAuthor : { id: 1, name: "Nadya" };
    rerenderEntireTree(data);
}

export const subscribe = (observer: (state: stateType) => void) => {
    rerenderEntireTree = observer;
}

export default data;
