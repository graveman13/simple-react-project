import {
  setIsSidebarOpen,
  setSelectedItemTitle,
} from "../../store/sidebar/actions";
import { connect } from "react-redux";
import * as s from "./styles/Sidebar.styles";
import MenuItemList from "./MenuItemList";

function Sidebar(props) {
  const {
    isSidebarOpen,
    sidebarData,
    selectedItemTitle,
    setSelectedItemTitle,
  } = props;
  return (
    <s.SidebarContainer isSidebarOpen={isSidebarOpen}>
      <MenuItemList
        menuItemList={sidebarData}
        selectedItemTitle={selectedItemTitle}
        setSelectedItemTitle={setSelectedItemTitle}
      />
    </s.SidebarContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    isSidebarOpen: state.sidebar.isSidebarOpen,
    sidebarData: state.sidebar.sidebarData,
    selectedItemTitle: state.sidebar.selectedItemTitle,
  };
};

const mapDispatchToProps = {
  setIsSidebarOpen,
  setSelectedItemTitle,
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
