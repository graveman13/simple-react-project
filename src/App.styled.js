import styled from "styled-components";
//device size
import { device } from "./Device"

export const App = styled.div`
     display: flex;
     position:relative;
     flex-direction: column;
     justify-content: flex-start;
     align-items: stretch;
     min-height:100vh;
     overflow: hidden;

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
         display: table;
         table-layout: fixed;
         width: 100%;
         height:100vh;
    }
`

export const ContentContainer = styled.div`
    flex: 1 1 auto;
    display:flex;
    background:#eaf4f4;

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
         display: table-row;
    }
`
export const Content = styled.div`
    flex:1 1 auto;
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        display: table-cell;
    }
`
//Сетка 
export const row = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  position: relative;
`
export const col = styled.div`
    flex:1 0 auto;
    padding:10px;
    width:20%;

     @media ${device.laptopL} {
     width:25%;
    }
    @media ${device.laptop} {
     width:33.333%;
    }
   @media ${device.tablet} {
     width:50%;
    }
    @media ${device.mobileL} {
     width:100%;
    }
`

