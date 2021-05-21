export const HEADER_TOOGLER_PUSH = "HEADER_TOOGLER_PUSH";

export const setTooglerWork = (isTooglerPush) => {
    return {
        type: HEADER_TOOGLER_PUSH,
        payload: isTooglerPush,
    }
}