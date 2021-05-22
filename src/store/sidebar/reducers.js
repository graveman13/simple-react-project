//actions
import { SIDEBAR_CHANGE_OPEN } from "./actions";
import { SIDEBAR_CHANGE_SELECTED_ITEM_TITLE } from "./actions";

import { SidebarData } from "../../Сonfig";

const defaultState = {
    isSidebarOpen: false,
    sidebarData: SidebarData,
    selectedItemTitle: SidebarData[0].title,
}

export const sidebarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIDEBAR_CHANGE_OPEN:
            return {
                ...state, isSidebarOpen: action.payload,
            }
        case SIDEBAR_CHANGE_SELECTED_ITEM_TITLE:
            return {
                ...state, selectedItemTitle: action.payload,
            }
        default:
            return state;
    }
}
