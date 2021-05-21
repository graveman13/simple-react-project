import { API_URL } from "./Сonfig";

export const SEARCH_TYPE_ALL = "all";
export const SEARCH_TYPE_MOVIES = "movie";
export const SEARCH_TYPE_SERIES = "series";

export const getAllMoviesByName = async (movieName, typeSearch = SEARCH_TYPE_ALL) => {
    const searchParam = typeSearch !== SEARCH_TYPE_ALL ? `&type=${typeSearch}` : ``;

    const response = await fetch(API_URL + `&s=${movieName}` + searchParam);
    return await response.json();
}

export const getMovieById = async (movieItemId) => {
    const response = await fetch(API_URL + `&i=${movieItemId}`);
    return await response.json();
}