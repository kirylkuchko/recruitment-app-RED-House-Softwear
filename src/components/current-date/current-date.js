import {Component} from 'react';

import "./current-date.css";

class CurrentDate extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          date: ''
        }   
    }

    render() {
        return (
            <div className="current-date">
                <h2 className="current-date-abbreviated">July 2022</h2>
                <h3 className="current-date-full">Thursday, Jul 21, 2022 </h3>
            </div>
        )
    }
}

export default CurrentDate;