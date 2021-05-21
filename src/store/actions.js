export const SIDEBAR_CHANGE_OPEN = "SIDEBAR_CHANGE_OPEN";

export const setIsSidebarOpen = (isOpenSidebar) => {
    console.log("action sidebar");
    return {
        type: SIDEBAR_CHANGE_OPEN,
        payload: isOpenSidebar,
    }
}