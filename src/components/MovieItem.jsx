import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../Api";
import * as s from "./styles/MovieItem.styles";

function MovieItem(props) {
  const [movieItem, setMovieItem] = useState({});
  const { id_movie } = useParams();
  const {
    Poster,
    Title,
    Year,
    Genre,
    Runtime,
    Director,
    Actors,
    Plot,
    Language,
    Country,
    imdbRating,
    imdbVotes,
  } = movieItem;

  useEffect(() => {
    getMovieById(id_movie).then((data) => {
      setMovieItem(data);
    });
  }, [id_movie]);

  return (
    <s.MovieItemContainer>
      <s.MovieItemPoster>
        <img src={Poster} alt={Title} />
      </s.MovieItemPoster>
      <table>
        <tr>
          <s.MovieItemTitle>{Title}</s.MovieItemTitle>
        </tr>
        <tr>
          <s.MovieItemKey>Year: </s.MovieItemKey>
          <s.MovieItemKey>{Year}</s.MovieItemKey>
        </tr>
        <tr>
          <s.MovieItemKey>Genre: </s.MovieItemKey>
          <s.MovieItemKey>{Genre}</s.MovieItemKey>
        </tr>
        <tr>
          <s.MovieItemKey>Duration: </s.MovieItemKey>
          <s.MovieItemKey>{Runtime}</s.MovieItemKey>
        </tr>
        <tr>
          <s.MovieItemKey>Director: </s.MovieItemKey>
          <s.MovieItemKey>{Director}</s.MovieItemKey>
        </tr>
        <tr>
          <s.MovieItemKey>Actor: </s.MovieItemKey>
          <s.MovieItemKey>{Actors}</s.MovieItemKey>
        </tr>
        <tr>
          <s.MovieItemKey>Description: </s.MovieItemKey>
          <s.MovieItemKey>{Plot}</s.MovieItemKey>
        </tr>
        <tr>
          <s.MovieItemKey>Language: </s.MovieItemKey>
          <s.MovieItemKey>{Language}</s.MovieItemKey>
        </tr>
        <tr>
          <s.MovieItemKey>Country: </s.MovieItemKey>
          <s.MovieItemKey>{Country}</s.MovieItemKey>
        </tr>
        <tr>
          <s.MovieItemKey>Imdb rating: </s.MovieItemKey>
          <s.MovieItemKey>{imdbRating}</s.MovieItemKey>
        </tr>
        <tr>
          <s.MovieItemKey>Imdb votes: </s.MovieItemKey>
          <s.MovieItemKey>{imdbVotes}</s.MovieItemKey>
        </tr>
      </table>
    </s.MovieItemContainer>
  );
}

export default MovieItem;
