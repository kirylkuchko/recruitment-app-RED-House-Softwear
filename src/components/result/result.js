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

        return (
            <div className="result">
                <h2 className="result-temperature">31{temperature}°C </h2>
                <h3 className="result-location">London{location}</h3>
            </div>
        )
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