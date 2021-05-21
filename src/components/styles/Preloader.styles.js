import styled, { keyframes } from "styled-components";

const progressbarKetframe = keyframes`
      0%{
        left:0;
      }
      100%{
        left:100%;
      }
`
export const Progressbar = styled.div`
    position: relative;
    height: 4px;
    width: 100%;
    background-color: #acece6;
    border-radius: 2px;
    overflow: hidden;
    margin:0 40px;

    &::before{
      content:"";
      position:absolute;
      display:block;
      left:0;
      top:0;
      height: 4px;
      width:40%;
      background-color: #26a69a;
      animation-name:${progressbarKetframe};
      animation-iteration-count:infinite;
      animation-duration: 2s;
    }
`