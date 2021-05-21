import styled from "styled-components";
import { device } from "../../../Device";

const heightMenuItem = " 70px";
const widthIcon = " 40px";
const widthArrow = " 40px";

export const MenuItemContainer = styled.div`
${p => (p.isSubmenuOpen && p.isMenuItemHasSubmenu) ?
    "height:280px;" :
    `height:${heightMenuItem};`
  }
  line-height:70px;
  overflow:hidden;
  transition:0.5s;
  font-size:22px;

`
export const MenuItem = styled.div`
    white-space: nowrap;
    padding-left:20px;
    height:${heightMenuItem};
    &:hover{
      background:#a2d2ff;
    }
    &:active{
      background:#f28482;
    }
  ${p => p.isItemSelected &&
    "background:#eae2b7; color:#5f0f40;"
  }
    ${p => !p.isSidebarOpen &&
    "text-align:center;"
  }
  @media${device.mobileL}{
    text-align:left;
  }
  @media${device.tablet}{
    text-align:center;
  }
`
//basic for icon and arrow
const MenuItemElement = styled.span`
  display:inline-block;
  overflow:hidden;
  text-align:center;
  transition:0.5s;
  
`
export const Icon = styled(MenuItemElement)`
  width:${widthIcon};
`
export const Arrow = styled(MenuItemElement)`
  width: ${widthArrow};
`;
/////////////////////////////////

export const Title = styled.span`
  display:inline-block;
  overflow:hidden;
  text-overflow:ellipsis;
  min-width:90px;
  max-width:calc(100% - (${widthIcon} + ${widthArrow}));
  padding-right:40px;

  ${p => !p.isSidebarOpen &&
    "display:none;"
  }
  @media${device.tablet}{
     display:none;
  }
  @media${device.mobileL}{
     display:inline-block;
  }
  
`
