import './history-list.css';

const HistotryList = () => {
    return (
        <div>
            <h3 className="history-list-header">Previous locations</h3>
            <ul className="history-list">
                <li className="history-list-item">New York 2022-07-21 32°C</li>
                <li className="history-list-item">Paris 2022-07-21 32°C</li>
                <li className="history-list-item">Warsaw 2022-07-21 32°C</li>
                <li className="history-list-item">Minsk 2022-07-21 32°C</li>
                <li className="history-list-item">Amsterdam 2022-07-21 32°C</li>
            </ul>
        </div>

    )
}

export default HistotryList;