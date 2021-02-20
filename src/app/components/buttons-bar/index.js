import React,{Component} from "react";
import ButtonBarStyled from './style';
class ButtonBar extends Component{
    render(){
        return (
            <ButtonBarStyled>
                <div>Spotify</div>
                <div>AppleMusic</div>
                <div>Itune</div>
                <div>Tour</div>
                <div>Vinyl</div>
                <div>Merch</div>
            </ButtonBarStyled>
        );
    }
}
export default ButtonBar;