export const SIDEBAR_CHANGE_OPEN = "SIDEBAR_CHANGE_OPEN";
export const SIDEBAR_CHANGE_SELECTED_ITEM_TITLE = "SIDEBAR_CHANGE_SELECTED_ITEM_TITLE";

export const setIsSidebarOpen = (isOpenSidebar) => {
    return {
        type: SIDEBAR_CHANGE_OPEN,
        payload: isOpenSidebar,
    }
}
export const setSelectedItemTitle = (selectedItemTitle) => {
    return {
        type: SIDEBAR_CHANGE_SELECTED_ITEM_TITLE,
        payload: selectedItemTitle,
    }
}