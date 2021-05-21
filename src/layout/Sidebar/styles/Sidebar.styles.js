import styled from "styled-components";
import { device } from "../../../Device";

export const SidebarContainer = styled.aside`
    float:left;
    background:#eaf4f4;
    overflow:hidden;
    -webkit-transition:1s;
   -o-transition:1s;
    transition: 1s;
    width:${p => p.isSidebarOpen ? "30%;" : "150px;"};
    height:100%;
  
    @media ${device.mobileL}{
      height:auto;
      max-height:0;
      transition:max-height 1s ease-out;
      width:100%;
      ${p => p.isSidebarOpen && "max-height:1000px;"};
    }

`