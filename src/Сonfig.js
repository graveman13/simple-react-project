const API_KEY = "ea3993f8"
export const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
export const DEFAULT_MOVIE_FOR_SEARCH = "batman";
export const DEFAULT_TYPE_SEARCH = 'all';

//////////////////////////////////////////
//Sidebar data
export const SidebarData = [
    {
        title: "Home",
        to: "/",
        icon: "icon-home",
        submenuItem: []
    },
    {
        title: "Movies",
        to: "/movies",
        icon: "icon-eye",
        submenuItem: []
    },
    {
        title: "About",
        to: "/about",
        icon: "icon-eye",
        submenuItem: []
    },
    {
        title: "Menu",
        to: "/menu",
        icon: "icon-file-text",
        submenuItem: [
            {
                title: "sub menu 1",
                to: "/menu/sub_menu_1",
                icon: "icon-libreoffice",
                submenuItem: [],
            },
            {
                title: "sub menu 2",
                to: "/menu/sub_menu_2",
                icon: "icon-libreoffice",
                submenuItem: [],
            },
            {
                title: "sub menu 3",
                to: "/menu/sub_menu_3",
                icon: "icon-libreoffice",
                submenuItem: [],
            }
        ]
    },
    {
        title: "Contact",
        to: "/contact",
        icon: "icon-address-book",
        submenuItem: [],
    },
]
