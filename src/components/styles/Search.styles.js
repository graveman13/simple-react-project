import styled from "styled-components";

export const Search = styled.div`
    position:relative;
     margin:20px 20px 40px 20px;
     min-height:40px;
`
export const ButtonSearch = styled.button`
     width:40px;
     height:40px;
     background:#eae4e9;
     top:0;
     right:0;
     line-height:40px;
     position:absolute;
     right:0;
     font-size:22px;

     &:hover{
      background:#a2d2ff;
      }
    &:active{
      background:#f28482;
    }
`

export const InputSearch = styled.input`
     width:100%;
     height:40px;
     font-size:22px;
     padding:0 45px 0 20px;
     line-height:40px;
     background:#eae4e9;
     border: none;
     cursor: pointer;
     margin-bottom:20px;
`
/*Search type*/
export const SearchTypeLable = styled.label`
`

export const SearchTypeTitle = styled.span`
     display: inline-block;
     position: relative;
     overflow: hidden;
     min-height: 30px;
     padding-left: 40px;
     font-size:20px;
     margin-left:10px;

     &::before{
          content: "";
          display: inline-block;
          position: absolute;
          width: 18px;
          height: 18px;
          top: 0;
          left: 0;
          border:1px solid #000;
          border-radius:50%;
          text-align: center;
          color: #696969;
     }
`
export const SearchTypeInput = styled.input`
     display:none;
     &:checked ~ ${SearchTypeTitle}::before{
          background:gray;
          transition:0.3s;
     }
`
