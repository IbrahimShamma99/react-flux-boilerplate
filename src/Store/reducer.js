import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import persistConfig from "./schema";

import userReducer from "./User/user.reducers";

const rootReducer = combineReducers({
  UserState: persistReducer(persistConfig.user, userReducer),
});

export default rootReducer;
