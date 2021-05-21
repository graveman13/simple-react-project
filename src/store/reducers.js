import { combineReducers } from "redux";
import { sidebarReducer } from "./sidebar/reducers";
import { headerReducer } from "./header/reducers";

export default combineReducers({
    sidebar: sidebarReducer,
    header: headerReducer,
})