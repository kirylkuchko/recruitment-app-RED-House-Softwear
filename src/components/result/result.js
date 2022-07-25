import {Component} from 'react';
import './result.css';

//I chose the method of changing the state through a class, and not through functional hooks, for the sake of showing my skills
class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '31°C',
            location: 'London'
        }
    }

    //I use class field syntax for easy coding, instead of bind
    setNewResult = ({newLocation, newTemperature}) => {
        this.setState({
            temperature: newTemperature,
            location: newLocation
        });
    }

    render() {
        const location = this.props.location;
        const temperature = this.props.temperature;

        if(!this.props.location || !this.props.temperature) {
            return (
                <div className="result">
                    <h2 className="result-header">No Location Found</h2>
                    <h3 className="result-subheader">Сheck the spelling of the locale name or enter a different location</h3>
                </div>
            )
        } else {
            return (
                <div className="result">
                    <h2 className="result-temperature">{temperature}°C </h2>
                    <h3 className="result-location">{location}</h3>
                </div>
            )
        }

    }
}  

/* const Result = ({props}) => {
    const location = props.location;
    const temperature = props.temperature;
    return (
        <div className="result">
            <h2 className="result-temperature">{temperature}</h2>
            <h3 className="result-location">{location}</h3>
        </div>
    )
} */

export default Result;