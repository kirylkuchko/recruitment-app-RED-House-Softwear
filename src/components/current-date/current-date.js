import "./current-date.css";

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const CurrentDate = ({data}) => {

    return (
        <div className="current-date">
            <h2 className="current-date-abbreviated">{months[data.month]} {data.year}</h2>
            <h3 className="current-date-full">{days[data.dayOfWeek]}, {data.day} {months[data.month].slice(0,3)} {data.year}</h3>
        </div>
    )

}

export default CurrentDate;