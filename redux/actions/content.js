/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: Application Content Actions
 * Description: All Content Of Data Fetch To Server With Actions
 * * */
import axios from 'axios';
import { Base64 } from 'js-base64';
import types from '../types';

const {
    HANDLE_LOADING,
    HANDLE_LOADING_CONTENT,
    UPDATE_CONTENT_PATH,
    TOPICS_DATA_FETCH_SUCCESS,
    TOPICS_DATA_FETCH_FAILED,
    CONTENT_DATA_FETCH_SUCCESS,
    CONTNET_DATA_FETCH_FAILED,
    HANDLE_TOP_LOADING_PROGRESS,
    HANDLE_CLICK_CLEAR_MESSAGE,
} = types.content;

const methods = {};

// Loading Action Method
methods.handleLoading = () => (dispatch) => {
    dispatch({
        type: HANDLE_LOADING,
    });
};

methods.updateContentPath = (title, chapterTitle, contentTitle) => (dispatch) => {
    dispatch({
        type: UPDATE_CONTENT_PATH,
        payload: {
            currentTopic: title || null,
            currentChapter: chapterTitle || null,
            currentContent: contentTitle || null,
        },
    });
};
// Clear Message History
methods.handleClickClearMessage = () => (dispatch) => {
    dispatch({
        type: HANDLE_CLICK_CLEAR_MESSAGE,
    });
};
// Fetched the topics related data
methods.fetchTopicsData = (title, chapterTitle, contentTitle) => async (dispatch) => {
    // Dispatch to update content path of state
    dispatch({
        type: HANDLE_TOP_LOADING_PROGRESS,
    });
    dispatch({
        type: UPDATE_CONTENT_PATH,
        payload: {
            currentTopic: title || null,
            currentChapter: chapterTitle || null,
            currentContent: contentTitle || null,
        },
    });
    dispatch({
        type: HANDLE_LOADING,
    });
    try {
        const res = await axios.get(`${process.env.CONTENT_API_URI}/${title}`);

        const topics = res.data.map((topic) => topic.name);

        dispatch({
            type: HANDLE_TOP_LOADING_PROGRESS,
        });
        dispatch({
            type: TOPICS_DATA_FETCH_SUCCESS,
            payload: topics,
        });
    } catch (e) {
        dispatch({
            type: HANDLE_TOP_LOADING_PROGRESS,
        });
        dispatch({
            type: TOPICS_DATA_FETCH_FAILED,
            payload: e.message,
        });
    }
};
// Fetched the content of topics data
methods.fetchContentData = (path) => async (dispatch) => {
    console.log('Content Path', path);
    dispatch({
        type: HANDLE_LOADING_CONTENT,
    });
    try {
        const res = await axios.get(
            `${process.env.CONTENT_API_URI}/${`${path.replaceAll('-', ' ')}.md`}`
        );
        dispatch({
            type: CONTENT_DATA_FETCH_SUCCESS,
            payload: Base64.decode(res.data.content),
        });
    } catch (e) {
        dispatch({
            type: CONTNET_DATA_FETCH_FAILED,
            payload: e.message,
        });
    }
};

export default methods;
