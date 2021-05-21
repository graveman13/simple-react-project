import styled from "styled-components";
import { device } from "../../Device";

export const HeaderContainer = styled.div`
 @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
       display: table-header-group;
       height: 60px;
  }
`
export const HeaderElement = styled.div`
    position:relative;
    height: 60px;
    min-width:100%;
    background:#eaf4f4;

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
       display: table-cell;
       width:100%;
      vertical-align: middle;
  }
`
export const ToggleContainer = styled.div`
    position: absolute;
    top:50%;
    left:40px;
    transform:translate(-50%, -50%);
    
    width: 50px;
    height: 50px;
    border-radius: 50%;

    &:hover{
        background:grey;
        color:#fff;
    }
    @media ${device.tablet} {
      display:none;
    }
    @media ${device.mobileL} {
      display:block;
    }
       @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        top:auto;
      }
`

export const Toggle = styled.div`
    text-align: center;
    transform: ${p => p.click ? 'rotate(360deg)' : 'rotate(0deg)'};
    transition: transform 0.7s;

    &::before{
        font-size:24px;
        line-height:50px;
        margin:0 auto;
    }
`