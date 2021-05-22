import * as s from "./styles/MenuItemList.styles";
import MenuItem from "./MenuItem";

function MenuItemList(props) {
  const {
    menuItemList = [],
    selectedItemTitle = "",
    setSelectedItemTitel = Function.prototype,
  } = props;

  return (
    <s.MenuItemList>
      {menuItemList.map((menuItem, index) => (
        <MenuItem
          key={index}
          menuItem={menuItem}
          selectedItemTitle={selectedItemTitle}
          setSelectedItemTitel={setSelectedItemTitel}
        />
      ))}
    </s.MenuItemList>
  );
}

export default MenuItemList;
