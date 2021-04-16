/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: Application Content Reducers
 * Description: All Content Of Data Fetch To Server With API
 * * */
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

const initalState = {
    isLoading: false,
    isLoadingContent: false,
    topics: [],
    currentTopic: null,
    currentChapter: null,
    currentContent: null,
    content: null,
    topLoadingProgress: null,
    msg: null,
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case HANDLE_LOADING:
            state = {
                ...state,
                isLoading: !state.isLoading,
            };
            return state;
        case HANDLE_LOADING_CONTENT:
            state = {
                ...state,
                isLoadingContent: !state.isLoadingContent,
            };
            return state;
        case UPDATE_CONTENT_PATH:
            state = {
                ...state,
                currentTopic: action.payload.currentTopic,
                currentChapter: action.payload.currentChapter,
                currentContent: action.payload.currentContent,
            };
            return state;
        case HANDLE_CLICK_CLEAR_MESSAGE:
            state = {
                ...state,
                msg: null,
            };
            return state;
        case TOPICS_DATA_FETCH_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                topics: [...action.payload],
            };
            return state;
        case TOPICS_DATA_FETCH_FAILED:
            state = {
                ...state,
                isLoading: false,
                msg: action.payload,
            };
            return state;
        case CONTENT_DATA_FETCH_SUCCESS:
            state = {
                ...state,
                isLoadingContent: false,
                content: action.payload,
            };
            return state;
        case CONTNET_DATA_FETCH_FAILED:
            state = {
                ...state,
                msg: action.payload,
                isLoadingContent: false,
            };
            return state;
        case HANDLE_TOP_LOADING_PROGRESS:
            state = {
                ...state,
                topLoadingProgress: !state.topLoadingProgress,
            };
            return state;
        default:
            return state;
    }
};
export default reducer;
