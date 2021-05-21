import MovieItemList from "./MovieItemList";
import * as s from "../App.styled";

function MoviesList(props) {
  const { movies = [] } = props;

  return (
    <s.row>
      {movies.map((movie, index) => {
        return <MovieItemList key={index} movie={movie} />;
      })}
    </s.row>
  );
}
export default MoviesList;
