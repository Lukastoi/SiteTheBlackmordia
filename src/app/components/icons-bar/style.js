import styled from 'styled-components';
import theme from "../../datas/theme";
export const IconsBarStyled = styled.div`
display:flex;
margin:auto;
flex-direction: row;
width:60%;
padding:4px;
margin-bottom:40px;
@media only screen and (max-width: 800px) {
    .text {
      display:none;
    }
    
  }
>div{
    cursor: default;
    display:flex;
    margin:auto;
    flex-direction:row;
    @media only screen and (max-width: 800px) {
        .linkIcons{
            margin-left:15px;
        }
    }
}
>div:hover{
    cursor:pointer;
}
.linkIcons{
    background-color:black;
    color:white;
    margin-left:5px;
    ${theme.styleBorder}
    //#BD2773
    border-radius:10px;
    padding: 2px 6px 2px 6px;
    text-shadow: 0px 0px 7px white;
}
.icon{
    display:flex;
    flex-direction:row;
    text-align:left;
    width:100%;
    margin:auto;
    cursor:default;
}
.icon:hover{
    cursor:pointer;
}

.icon>img{
    margin-top:4px;
    max-width:16px;
    max-height:16px;
    margin-right:4px;
}
.icon>div{
    cursor:default;
}
.icon>div:hover{
    color:grey;
    cursor:pointer;
}
.facebook{
    margin-left:auto;
}
// .texte{
//     margin-top:2px;
// }
`;
export default IconsBarStyled;