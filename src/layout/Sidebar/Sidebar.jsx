import { setIsSidebarOpen } from "../../store/actions";
import { connect } from "react-redux";
import * as s from "./styles/Sidebar.styles";
import MenuItemList from "./MenuItemList";

import { SidebarData } from "../../Сonfig";
import { useSelector } from "react-redux";
export function Sidebar(props) {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const menuItemList = SidebarData;
  return (
    <s.SidebarContainer isSidebarOpen={isSidebarOpen}>
      <MenuItemList menuItemList={menuItemList} />
    </s.SidebarContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    isSidebarOpen: state.sidebar.isSidebarOpen,
  };
};

const mapDispatchToProps = {
  setIsSidebarOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
