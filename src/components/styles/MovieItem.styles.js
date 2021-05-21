import styled from "styled-components";

export const MovieItemContainer = styled.div`
    padding:10px;
    font-size:20px;
    height:100%;
`
export const MovieItemTd = styled.td`
    vertical-align:top;
     padding:5px 5px 10px 5px;
     color:#264653;
`


export const MovieItemTitle = styled(MovieItemTd)`
    font-weight:600;
`
export const MovieItemKey = styled(MovieItemTd)`
    font-weight:500;
     
`
export const MovieItemPoster = styled.div`
  float:left;
  margin-right:10px;
`