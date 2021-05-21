import * as s from "./styles/MenuItemList.styles";
import MenuItem from "./MenuItem";

export function MenuItemList(props) {
  const {
    menuItemList = [],
    selectedItemTitle = "",
    setSelectedItemTitel = "",
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
