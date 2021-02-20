import React, { Component } from 'react';
import AcceuilStyled from './style';
import AcceuilImage from "../../datas/images/acceuilV2.png";
import ButtonBar from '../../components/buttons-bar/index';
import TourDates from '../../components/tour-dates/index';
import IconsBar from '../../components/icons-bar/index';
import Youtube from "../../datas/images/icons/youtube.png";
export class PageAcceuil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTourOpen: false,
    }
  }
  onTourClic = () => {
    const { isTourOpen } = this.state;
    console.log("IS TOUR OPEN :: ", !isTourOpen);
    this.setState({
      isTourOpen: !isTourOpen,
    })
  }

  render() {
    return (
      <AcceuilStyled>
        <div className="imageBox">
          <img className="imageAlbum" src={AcceuilImage} />
        </div>
        <IconsBar callBackTourOpenClose={this.onTourClic} />
        {/* <div className="clip">
          <div className="musicTitre"><img className="youtubeLogo" src={Youtube}/><div>Music Video</div></div>
          <div className="divMiniature">
            <iframe className="miniature" src="https://www.youtube.com/embed/1MrhKQJigVw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div> */}
        {this.state.isTourOpen && <TourDates/>}
      </AcceuilStyled>
    );
  }
}

export default (PageAcceuil);