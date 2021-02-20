import styled from 'styled-components';
import theme from "../../datas/theme";

export const TourDatesStyled = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    min-height: 150px;

    .TableauTour{
        width:100%;
        max-width:400px;
        height:100%;
        margin:auto;
        display:flex;
        flex-direction:row;
        >div{
            text-align:left;
            display:flex;
            flex-direction:column;
            ${theme.styleBorder}
            width:50%;
        }   
    }
    .Titre{
        text-align:center;
        text-shadow: 0px 0px 14px #BD2773;
    }
`;
export default TourDatesStyled;