import React, { Component } from 'react'
import IconsBarStyled from './style';
// import {Spotify, Instagram, Facebook, Itunes} from '../../datas/images/icons/index';
import Facebook from '../../datas/images/icons/facebook.png';
import Spotify from '../../datas/images/icons/spotify.png';
import Instagram from '../../datas/images/icons/instagram.png';
import Itunes from '../../datas/images/icons/itunes.png';
import Tour from '../../datas/images/icons/world.png';
import Dollar from '../../datas/images/icons/dollar.png';

class IconsBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = ['itunes', 'spotify', 'instagram', 'facebook'];
        return (
            <IconsBarStyled>
                <div>
                    <a target="_blank" href="https://www.facebook.com/Blackmordia" >
                        <div className="linkIcons facebook">
                            <div className="icon"><img src={Facebook} /><div className="text">Facebook</div></div>
                        </div>
                    </a>
                    <a>
                        <div className="linkIcons">
                            <div className="icon"><img src={Itunes} /><div className="text">Itunes</div></div>
                        </div>
                    </a>
                    <a target="_blank" href="https://open.spotify.com/artist/7swEODLC8v8gg4aKUznOuW">
                        <div className="linkIcons">
                            <div className="icon"><img src={Spotify} /><div className="text">Spotify</div></div>
                        </div>
                    </a>
                    <a>
                        <div onClick={this.props.callBackTourOpenClose} className="linkIcons">
                            <div className="icon tour"><img src={Tour} /><div className="text">Tour</div></div>
                        </div>
                    </a>
                    <a target="_blank" href="">
                        <div className="linkIcons">
                            <div className="icon"><img src={Dollar} /><div className="store text">Store</div></div>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/theblackmordia/">
                        <div className="linkIcons">
                            <div className="icon"><img src={Instagram} /><div className="text">Instagram</div></div>
                        </div>
                    </a>

                </div>

            </IconsBarStyled>
        );
    }
}

export default IconsBar