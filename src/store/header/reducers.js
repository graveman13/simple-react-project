//actions
import { HEADER_TOOGLER_PUSH } from "./actions";

const defaultState = {
    isTooglerPush: false,
}

export const headerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case HEADER_TOOGLER_PUSH:
            return {
                ...state, isTooglerPush: action.payload,
            }
        default:
            return state;
    }
}
