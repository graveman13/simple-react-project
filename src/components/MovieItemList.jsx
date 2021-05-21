import * as s from "./styles/Movie.styles";
import * as sApp from "../App.styled";
import { Link, useRouteMatch } from "react-router-dom";

function MovieItemList(props) {
  const { movie } = props;
  const routeMatch = useRouteMatch();
  return (
    <sApp.col>
      <Link to={`${routeMatch.url}/movie/${movie.imdbID}`}>
        <s.Card>
          <s.Card__Img src={movie.Poster} alt={movie.Title} />
          <s.Card__Content>
            <s.Card__Title>{movie.Title}</s.Card__Title>
            <s.Card__Year>{movie.Year}</s.Card__Year>
            <s.Card__Type>{movie.Type}</s.Card__Type>
          </s.Card__Content>
        </s.Card>
      </Link>
    </sApp.col>
  );
}
export default MovieItemList;
