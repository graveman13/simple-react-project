import * as s from "./BasicPagesComponent.styled";
import { useRouteMatch } from "react-router-dom";

function BasicPagesComponent(props) {
  const { titlePage } = props;
  const matchRouter = useRouteMatch();

  return (
    <s.BasicPageContainer>
      <s.TitlePage>{titlePage}</s.TitlePage>
      <s.BodyPage>
        <p>
          Page url:
          <s.PageUrl> {matchRouter.url} </s.PageUrl>
          page.
        </p>
      </s.BodyPage>
    </s.BasicPageContainer>
  );
}
export default BasicPagesComponent;
