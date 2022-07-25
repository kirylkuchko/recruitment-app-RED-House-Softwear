import './result.css';

//I chose the method of changing the state through a class, and not through functional hooks, for the sake of showing my skills
const Result = ({location, temperature, badRequest}) => {
    if(badRequest) {
        return (
            <div className="result">
                <h2 className="result-header">No Location Found</h2>
                <h3 className="result-subheader">Сheck the spelling of the locale name or enter a different location</h3>
            </div>
        )
    } else if (!temperature) {
        return (
            <div className="result">

            </div>
        )
    }else {
        return (
            <div className="result">
                <h2 className="result-temperature">{temperature}°C </h2>
                <h3 className="result-location">{location}</h3>
            </div>
        )
    }  
}  

export default Result;