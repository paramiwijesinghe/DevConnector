
import axios from 'axios';
import {  
     GET_POSTS,
     POST_ERROR, 
     UPDATE_LIKES, 
     DELETE_POST, 
     ADD_POST,
    GET_POST, 
    ADD_COMMENT,
    REMOVE_COMMENT} from './types';
import { setAlert } from './alert';

// Get posts
export const getPosts = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/posts'); // Adjust the API endpoint
        dispatch({
            type: GET_POSTS,
            payload: res.data // Assuming the API returns an array of posts
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status } // Handle errors
        });
    }
};

// Add post
export const addLike = id => async (dispatch) => {
    try {
        const res = await axios.put(`/api/posts/like/${id}`); // Adjust the API endpoint
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data} // Assuming the API returns an array of posts
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status } // Handle errors
        });
    }
};


//Remove like
export const removeLike = id => async (dispatch) => {
    try {
        const res = await axios.put(`/api/posts/unlike/${id}`); // Adjust the API endpoint
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data} // Assuming the API returns an array of posts
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status } // Handle errors
        });
    }
};

//Delete post
export const deletePost = id => async (dispatch) => {
    try {
        await axios.delete(`/api/posts/${id}`); // Adjust the API endpoint
        dispatch({
            type: DELETE_POST,
            payload: id // Assuming the API returns an array of posts
        });

        dispatch(setAlert('Post Removed', 'success'));
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status } // Handle errors
        });
    }
};

//Add post

export const addPost = FormData => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('/api/posts', FormData, config); // Adjust the API endpoint
        dispatch({
            type: ADD_POST,
            payload: res.data
        });

        dispatch(setAlert('Post Created', 'success'));
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status } // Handle errors
        });
    }
};


// Get post
export const getPost = id => async (dispatch) => {
    try {
        const res = await axios.get('/api/posts/:id'); // Adjust the API endpoint
        dispatch({
            type: GET_POST,
            payload: res.data // Assuming the API returns an array of posts
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status } // Handle errors
        });
    }
};

//Add comment

export const addComment = (postId, formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post(`/api/posts/comment/${postId}`, formData, config); // Adjust the API endpoint
        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        });

        dispatch(setAlert('Comment Added', 'success'));
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status } // Handle errors
        });
    }
};


//Delete comment

export const deleteComment = (postId, commentId) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post(`/api/posts/comment/${postId}/${commentId}`); // Adjust the API endpoint
        dispatch({
            type: REMOVE_COMMENT,
            payload: commentId
        });

        dispatch(setAlert('Comment Removed', 'success'));
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status } // Handle errors
        });
    }
};
