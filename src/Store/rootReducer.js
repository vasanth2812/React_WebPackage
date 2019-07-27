import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { USER_LOGGED_OUT } from "../Services/types";

const appReducer = combineReducers({
  user: () => ({})
});

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGGED_OUT:
      state = {};
      storage.removeItem("persist:root");
      return {};
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
