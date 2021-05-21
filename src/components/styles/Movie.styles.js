import styled from "styled-components";

export const Movie = styled.div`
  width:100%;
  
`
export const Card = styled.div`
   position:relative;
   max-width:100%;
   overflow:hidden;
   padding:10px;
   height:100%;
   word-wrap: break-word;
  -ms-word-wrap: break-word;

   box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%),
   0 3px 1px -2px rgb(  0 0 0 / 12%),
   0 1px 5px 0 rgb(0 0 0 / 20%);
   background:#eae4e9;

   &:hover{
      background:#a2d2ff;
    }
    &:active{
      background:#f28482;
    }
`
export const Card__Content = styled.div`
`

export const Card__Title = styled.p`
   font-size:22px;
   font-weight:600;
   margin-bottom:20px;
   max-width:100%;
   overflow:hidden;
   
    white-space: normal;
     -ms-word-wrap: break-word;
    word-wrap: break-word;
`
export const Card__Img = styled.img`
  display:inline-block;
  min-height:300px;
  margin:0 auto;
  width:100%;
  margin-bottom:20px;
`
export const Card__Type = styled.p`
  font-size:18px;
  margin-bottom:10px;
`
export const Card__Year = styled.p`
   font-size:18px;
   margin-bottom:10px;
`