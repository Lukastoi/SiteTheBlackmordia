import styled from 'styled-components';
import theme from "../../datas/theme";
export const AcceuilStyled = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    .divMiniature{
        margin:auto;
        width:100%;
        display:flex;
    }
    .divMiniature .miniature{
        width:90%;
        margin:auto;
    }
    .imageBox{
        max-width: 350px;
        margin:auto;
        margin-bottom:70px;
        width:90%;
        ${theme.styleBorder}
    //BD2773
    }
    .clip{
        display:flex;
        flex-direction:column;
        margin:auto;
        margin-bottom:35px;
    }
    .clip>div{
        cursor:default;
    }
    .clip>div:hover{
        cursor:pointer;
        color:grey;
    }
    .youtubeLogo{
        width:30px;
        margin-right:4px;
        margin-top:3px;
    }
    .clip >img{
        width : 16px;

    }
    >h2{
        margin:auto;
    }
    >h1{
        margin:auto;
        margin-bottom:25px;
    }
    .imageAlbum{
        max-width: 350px;
        margin:auto;
        
    }
    .musicTitre{
        margin:auto;
        font-size:25px;
        text-align:center;
        display:flex;
        flex-direction:row;
    }
`;

export default AcceuilStyled;