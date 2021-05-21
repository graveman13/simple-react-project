import * as s from "./styles/Search.styles";
import * as api from "../Api";

function Search(props) {
  const { setSearchMovie, setLoading, setTypeSearch, typeSearch } = props;

  const handlerKey = (event) => {
    if (event.key === "Enter") {
      setSearchMovie(event.target.value);
    }
  };

  const typeSearchChange = (event) => {
    setLoading(true);
    setTypeSearch(event.target.value);
  };
  return (
    <s.Search>
      <s.InputSearch
        type="text"
        placeholder="Search..."
        onKeyDown={handlerKey}
      ></s.InputSearch>

      <s.ButtonSearch type="submit" className="icon-search"></s.ButtonSearch>

      <s.SearchTypeLable>
        <s.SearchTypeInput
          name="typeSearch"
          type="radio"
          value="all"
          checked={typeSearch === api.SEARCH_TYPE_ALL}
          onChange={typeSearchChange}
        />
        <s.SearchTypeTitle>All</s.SearchTypeTitle>
      </s.SearchTypeLable>

      <s.SearchTypeLable>
        <s.SearchTypeInput
          name="typeSearch"
          type="radio"
          value="movie"
          checked={typeSearch === api.SEARCH_TYPE_MOVIES}
          onChange={typeSearchChange}
        />
        <s.SearchTypeTitle>Movies</s.SearchTypeTitle>
      </s.SearchTypeLable>
      <s.SearchTypeLable>
        <s.SearchTypeInput
          name="typeSearch"
          type="radio"
          value="series"
          checked={typeSearch === api.SEARCH_TYPE_SERIES}
          onChange={typeSearchChange}
        />
        <s.SearchTypeTitle>Series</s.SearchTypeTitle>
      </s.SearchTypeLable>
    </s.Search>
  );
}
export default Search;
