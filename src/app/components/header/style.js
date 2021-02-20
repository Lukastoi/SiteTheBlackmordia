import styled from 'styled-components';
import theme from "../../datas/theme";
//OCR A Std, monospace
// comic sans ms, fantasy
export const HeaderStyled = styled.div`
    display:flex;
    flex:1;
    ${theme.textShadow}
    margin:auto;
    margin-bottom:35px;
    margin-top:25px;
    .Titre{
        margin-right:14px;
    }
    
    .logoTitre{
        font-size:28px;
        margin:auto;
        width:100%;
        display:flex;
        flex-direction:row;
        text-align:center;
        .outNow{
            flex:1;
            font-size:24px;
            margin-top:28%;
            text-align:left;
            ${theme.textOptions.policeTitre}
        }
        >img{
            margin:auto;
            ${theme.textOptions.logoSize}
            margin-right:20px;
        }
    }
    .TitreEcrit{
        font-size:28px;
        margin:auto;
        width:100%;
        display:flex;
        flex-direction:row;
        text-align:center;
        ${theme.textOptions.policeTitre}
        .outNow{
            flex:1;
            font-size:24px;
            text-align:left;
            margin-top:6px;
        }
    }
    >div .single{
        max-height:150px;
        max-width:150px;
        text-align:center;
        
        margin:auto;
        margin-top:20px;
        display:flex;
        flex-direction:row;
    }
    .single>img{
        margin:auto;
        max-width:150px;
    }
    >div .sortie{
        font-size:20px;
        margin:auto;
        margin-bottom:20px;
        margin-top:10px;
    }
    

`;

export default HeaderStyled;