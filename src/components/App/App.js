import './App.css';
import CurrentDate from '../current-date/current-date';
import SearchPanel from '../search-panel/search-panel';
import Result from '../result/result';
import HistotryList from '../history-list/history-list';

function App() {

  //test data for history list
  const dataForHistoryList = () => {
    return (
      [{key:1,location:'New York',date:'2022-07-21',temperature:'32°C'},
      {key:2,location:'Paris',date:'2022-07-21',temperature:'32°C'},
      {key:3,location:'Warsaw',date:'2022-07-21',temperature:'32°C'},
      {key:4,location:'Minsk',date:'2022-07-21',temperature:'32°C'},
      {key:4,location:'Amsterdam',date:'2022-07-21',temperature:'32°C'}]
    )
  }

  return (
    <div className="App">
      <div className="grid">
        <div className="current-date-wrapper">
          <CurrentDate/>
        </div>
        <div className="search-panel-wrapper">
          <SearchPanel/>
        </div>
        <div className="result-wrapper">
          <Result temperature='32°C' location='Minsk'/> 
        </div>
        <div className="history-table-wrapper">
          <HistotryList data={dataForHistoryList()}/>
        </div>
      </div>
    </div>
  );
}

export default App;
