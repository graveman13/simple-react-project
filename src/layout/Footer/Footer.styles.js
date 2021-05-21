import styled from "styled-components";

export const FooterContainer = styled.footer`
   height: 60px;
   background:#eaf4f4;
   -webkit-flex: 0 1 auto;
   -ms-flex: 0 1 auto;
   flex: 0 1 auto;
   
   @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
       display: table-footer-group;
  }
`
export const FooterElement = styled.div`
 @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      display:table-cell;
      width:100%;
  }
`