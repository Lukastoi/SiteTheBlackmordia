import React, { Component } from 'react';
import TourDatesStyled from './style';
class TourDates extends Component {
    render() {
        return (
            <TourDatesStyled>
                <div className="TableauTour">
                    <div className="FutureDates">
                        <div className="Titre">FutureDate</div>
                        <div>
                            <ul>
                                <li>Rien a venir</li>
                            </ul>
                        </div>
                    </div>
                    <div className="PassedDates">
                        <div className="Titre">Dates Passées</div>
                        <div>
                            <ul>
                                <li>Nothing But Thieves November 2k18</li>
                                <li>Nickelback December 2k18</li>
                                <li>KISS 8th July 2k17</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </TourDatesStyled>
        );
    }
}
export default TourDates;