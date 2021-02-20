import styled from 'styled-components';

export const ButtonBarStyled = styled.div`
    display:flex;
    flex-direction:row;
    width:65%;
    min-width: 300px;
    margin:auto;
    >div{
        text-align:center;
        margin:auto;
        width:100%;
        border: solid black 1px;
    }
`;

export default ButtonBarStyled;