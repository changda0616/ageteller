import React, {Component} from 'react';
import partyPopper from '../assets/party-popper.jpg';

class AgeStates extends Component {
    timeSince(date){
        let today = new Date().getTime()
        let other_day = new Date(date).getTime()
        let diff = Math.floor(Math.abs(other_day-today)/(1000*60*60*24*365))
        return `${diff}`;
    }
    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>congrats on {this.timeSince(this.props.date)} years!</h4>
                <img src={partyPopper} alt="party-popper" className="party-popper"/>
            </div>
        )
    }
}
export default AgeStates;