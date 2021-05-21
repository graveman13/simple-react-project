import * as s from "./DescriptionSub.styles";
import BasicPagesComponent from "../../BasicPage/BasicPagesComponent";
function DescriptionSub(props) {
  const paramTitle = props.match.params.id_decs_path;
  return (
    <s.DescriptionSub>
      <BasicPagesComponent titlePage="Sub description" />
    </s.DescriptionSub>
  );
}
export default DescriptionSub;
