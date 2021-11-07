import React, { useReducer } from 'react';

function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.username;
    case 'LOGOUT':
      return '';

    default:
      return state;
  }
}
function postsReducer(state, action) {
  switch (action.type) {
    case 'CREATE_POST':
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author,
        id: action.id,
      };
      return [newPost, ...state];
    case 'FETCH_POSTS':
      return action.posts;
    default:
      return state;
  }
}

function errorReducer(state, action) {
  switch (action.type) {
    case 'POSTS_ERROR':
      return 'FAIL to fetch posts';
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    posts: postsReducer(state.posts, action),
    error: errorReducer(state.error, action),
  };
}
