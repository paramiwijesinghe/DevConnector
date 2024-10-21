
import axios from 'axios';
import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from './types';

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

