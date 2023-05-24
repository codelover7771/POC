// reducers.js
import { SET_MAIN_MENU } from './actions';

const initialState = {
  mainMenu: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_MAIN_MENU:
      return {
        ...state,
        mainMenu: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
