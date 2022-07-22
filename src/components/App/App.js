import './App.css';
import CurrentDate from '../current-date/current-date';
import SearchPanel from '../search-panel/search-panel';
import Result from '../result/result';
import HistotryList from '../history-list/history-list';

function App() {
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
          <Result/> 
        </div>
        <div className="history-table-wrapper">
          <HistotryList/>
        </div>
      </div>
    </div>
  );
}

export default App;
