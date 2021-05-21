import styled from "styled-components";
import { device } from "../../Device";

export const MainViewContainer = styled.div`
  background:#fff1e6;
  padding-bottom:20px;
  -o-transition:1s;
  transition:1s;
  overflow:hidden;
  height:100%;
 
  @media ${device.mobileL}{
      width:100%;
      height:100%;
  }
  
`