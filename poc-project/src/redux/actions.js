// actions.js
export const SET_MAIN_MENU = 'SET_MAIN_MENU';
export const SET_INDEX = "SET_INDEX"

export const setMainMenu = (menu) => ({
  type: SET_MAIN_MENU,
  payload: menu,
});

export const setIndex = (index) => ({
  type: SET_INDEX,
  payload: index,
});
