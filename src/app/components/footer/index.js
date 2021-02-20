import React, { Component } from 'react';
import FooterStyled from './style';



class Footer extends Component {
    render() {
        return (
            <FooterStyled>
                <div>
                    <p>&copy; 2020 ThroneMusic</p>
                    {/* <div className="copyrightLogo"> <span color="white" href="fa fa-copyright "/></div> */}
                    {/* <div className="copyright">ThroneMusic, 2020 </div> */}
                </div>
            </FooterStyled>
        );
    }
}

export default (Footer);