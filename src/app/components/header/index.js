import React, { Component } from 'react';
import HeaderStyled from './style';
import NomGroupe from "../../datas/images/TheBlackmordia.png"
import theme from "../../datas/theme";
class Header extends Component {
    render() {
        return (
            <HeaderStyled>
                {theme.textOptions.isLogo && <div className="logoTitre"><img src={theme.LogoPath} /><div className="outNow">Out now</div></div>}
                {!theme.textOptions.isLogo && 
                <div className="TitreEcrit">
                        <div className="Titre">XX</div>
                        <div className="outNow">Out now</div>
                    {/* <div class="sortie">Out Now</div> */}
                </div>}
            </HeaderStyled>
        );
    }
}
export default (Header);
