import { useState } from "react";
import * as s from "./styles/MenuItem.styles";
import MenuItemList from "./MenuItemList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MenuItem(props) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const {
    menuItem = [],
    selectedItemTitle = "",
    setSelectedItemTitel = Function.prototype,
  } = props;

  const isMenuItemHasSubmenu = menuItem.submenuItem.length > 0;

  const isItemSelected = selectedItemTitle === menuItem.title;

  const selectedHandler = (itemTitle) => {
    setSelectedItemTitel(itemTitle);
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  return (
    <s.MenuItemContainer
      isSubmenuOpen={isSubmenuOpen}
      isMenuItemHasSubmenu={isMenuItemHasSubmenu}
      isSidebarOpen={isSidebarOpen}
    >
      <Link to={menuItem.to} style={{ textDecoration: "none" }}>
        <s.MenuItem
          isItemSelected={isItemSelected}
          onClick={() => selectedHandler(menuItem.title)}
          isSidebarOpen={isSidebarOpen}
        >
          <s.Icon className={menuItem.icon}></s.Icon>
          <s.Title isSidebarOpen={isSidebarOpen}>{menuItem.title}</s.Title>
          {isMenuItemHasSubmenu && (
            <s.Arrow className="icon-arrow-down"></s.Arrow>
          )}
        </s.MenuItem>
      </Link>
      {isMenuItemHasSubmenu && (
        <MenuItemList
          menuItemList={menuItem.submenuItem}
          isSidebarOpen={isSidebarOpen}
          selectedItemTitle={selectedItemTitle}
          setSelectedItemTitel={setSelectedItemTitel}
          isSubmenu={isMenuItemHasSubmenu}
        />
      )}
    </s.MenuItemContainer>
  );
}
export default MenuItem;
