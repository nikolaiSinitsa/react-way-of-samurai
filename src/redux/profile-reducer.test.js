import {render, screen} from '@testing-library/react';
import React from 'react';
import profileReducer, {addPostActionCreater, deletePost} from "./profile-reducer";
let state = {
    posts: [{id: 1, message: "Hi, how are you?", likesCount: 15}, {
        id: 2, name: "It's my firs post", likesCount: 20
    }], profile: null, status: '',
};
// 1
test('length of posts should be incremented', () => {
    let action = addPostActionCreater("it-kamasutra.com");

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

// 2
test('message of new posts should be correct `it-kamasutra.com`', () => {
    let action = addPostActionCreater("it-kamasutra.com");
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

// 3
test('after deleting length of messages  should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});

