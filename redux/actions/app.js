import types from '../types';

const { HANDLE_CLICK_MENU, HANDLE_CLICK_MOBILE_MENU } = types.app;
const methods = {};

methods.handleChangeSelectMenu = (value) => (dispatch) => {
    dispatch({
        type: HANDLE_CLICK_MENU,
        payload: value,
    });
};
methods.handleClickMobileMenu = () => (dispatch) => {
    dispatch({
        type: HANDLE_CLICK_MOBILE_MENU,
    });
};

methods.removeExtAtLast = (url) => url.slice(0, url.length - 3);

export default methods;
