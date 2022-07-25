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
    setNewResult = ({newTemperature, newLocation}) => {
        this.setState({
            temperature: newTemperature,
            location: newLocation
        });
    }

    render() {
        const {temperature,location} = this.props;
        
        return (
            <div className="result">
                <h2 className="result-temperature">{temperature}</h2>
                <h3 className="result-location">{location}</h3>
            </div>
        )
    }
} 

export default Result;