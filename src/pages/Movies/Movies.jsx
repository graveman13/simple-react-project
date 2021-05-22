import * as s from "./Movies.styles";
import React, { useState, useEffect } from "react";

//componets
import MovieList from "../../components/MoviesList";
import Search from "../../components/Search";
import Preloader from "../../components/Preloader";

//Api for load movies
import { getAllMoviesByName } from "../../Api";
//config
import { DEFAULT_TYPE_SEARCH, DEFAULT_MOVIE_FOR_SEARCH } from "../../Сonfig";

function Movies() {
  const [typeSearch, setTypeSearch] = useState(DEFAULT_TYPE_SEARCH);
  const [movies, setMovies] = useState([]);

  const [searchMovie, setSearchMovie] = useState(DEFAULT_MOVIE_FOR_SEARCH);
  const [loading, setLoading] = useState(true);

  //Load movies
  useEffect(() => {
    getAllMoviesByName(searchMovie, typeSearch).then((data) => {
      setMovies(data.Search);
      setLoading(false);
    });
  }, [searchMovie, typeSearch]);

  return (
    <s.Movies>
      <Search
        setLoading={setLoading}
        setSearchMovie={setSearchMovie}
        setTypeSearch={setTypeSearch}
        typeSearch={typeSearch}
      />
      {loading ? (
        <Preloader />
      ) : movies ? (
        <MovieList movies={movies} setSearchMovie={setSearchMovie} />
      ) : (
        <h2>Not found movie {searchMovie}(.</h2>
      )}
    </s.Movies>
  );
}
export default Movies;
