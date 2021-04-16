/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: APP  Reducer
 * Description: All app related state
 * * */
import types from '../types';

const { HANDLE_CLICK_MENU, HANDLE_CLICK_MOBILE_MENU } = types.app;
const initialState = {
    isOpenMobileMenu: false,
    selectedMenu: '/',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_CLICK_MENU:
            state = {
                ...state,
                selectedMenu: action.payload,
            };
            return state;
        case HANDLE_CLICK_MOBILE_MENU:
            state = {
                ...state,
                isOpenMobileMenu: !state.isOpenMobileMenu,
            };
            return state;
        default:
            return state;
    }
};

export default reducer;
