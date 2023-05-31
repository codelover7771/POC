// reducers.js
import { SET_MAIN_MENU,SET_INDEX } from './actions';

const initialState = {
  mainMenu: [],
  menuIndex : 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_MAIN_MENU:
      return {
        ...state,
        mainMenu: action.payload,
      };
      case SET_INDEX:
        console.log(action.payload)
      return {
        ...state,
        menuIndex: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
