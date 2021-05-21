//actions
import { SIDEBAR_CHANGE_OPEN } from "./actions";

const defaultState = {
    isSidebarOpen: false,
}

export const sidebarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIDEBAR_CHANGE_OPEN:
            return {
                ...state, isSidebarOpen: action.payload,
            }
        default:
            return state;
    }
}
