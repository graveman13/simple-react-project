import * as s from "./MainView.styles";
import Routes from "../../Routes";

function MainView(props) {
  const { isSidebarOpen } = props;
  return (
    <s.MainViewContainer isSidebarOpen={isSidebarOpen}>
      <Routes />
    </s.MainViewContainer>
  );
}
export default MainView;
