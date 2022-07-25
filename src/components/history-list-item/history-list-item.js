import './history-list-item.css';

const HistotryListItem = ({location, date, temperature}) => {

    return (
        <li className='history-list-item'>
            <h3 className="history-list-item-location">{location}</h3>
            <h3 className="history-list-item-date">{date.day}-{date.month}-{date.year}</h3>
            <h3 className="history-list-item-temperature">{temperature}°C</h3>
        </li>
    )
}

export default HistotryListItem;


