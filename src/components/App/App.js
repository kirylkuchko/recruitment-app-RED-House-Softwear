import {Component} from 'react';

import CurrentDate from '../current-date/current-date';
import SearchPanelForm from '../search-panel/search-panel-form';
import Result from '../result/result';
import HistotryList from '../history-list/history-list';

import './App.css';
const APIKey = '3a605c93b5d4b3b09652e2f83a4d842b';
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      temperature: '',
      date: this.createDate(),
      //test data for history list
      history: [],
      historyLength: 0
    }
    
  }

  //I create Date at a high level of component hierarchy, because it is needed in several of them, so it is better to calculate it 1 time
  createDate = () => {
    const today = new Date();
    return {day:today.getDate(),
            month:today.getMonth(),
            year:today.getFullYear(),
            dayOfWeek:today.getDay()
          }
  }

  //function for openweathermap request with to GET req: first to geo for lat and lon, second for temperature by coordinates
  request = async (location) => {
    //request for lat and lon by city name
    return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIKey}`)
      .then((geoResponse) => {
        return geoResponse.json();
      }).then((geoResponse) => {
        //request for temperature by coordinates
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoResponse[0].lat}&lon=${geoResponse[0].lon}&appid=${APIKey}`)
          .then((tempResponse) => {
            return tempResponse.json();
          }).then((tempResponse) => {
              this.setState({
                //added data about temperature to props, for prop drilling to components
                temperature: (parseInt(tempResponse.main.temp)-273)
              });
              return (parseInt(tempResponse.main.temp)-273);
            }).then((temp) => {
              this.onResponseFromServer(temp);
            })
          .catch(function (e) {
            console.log(e);
          }) 
        }).catch(function (e) {
            console.log(e);
          });
  }

  onSerchSubmit = (location) => {
    this.setState(
      {location}
    );
    this.request(location);
  }

  onResponseFromServer = (temp) => {

    const {location,temperature,date,history,historyLength} = this.state;

    console.log(location,temperature,date,history,historyLength);
    const newHistory = history;
    newHistory.push({
      key:historyLength,
      location:location,
      date:date,
      temperature:temp
    });

    this.setState({
      historyLength: (historyLength+1),
      history: newHistory
    })
  }

  render () {
    return (
      <div className="App">
        <div className="grid">
          <div className="current-date-wrapper">
            <CurrentDate data={this.state.date}/>
          </div>
          <div className="search-panel-wrapper">
            <SearchPanelForm
              onSerchSubmit={this.onSerchSubmit}/>
          </div>
          <div className="result-wrapper">
            <Result location={this.state.location} temperature={this.state.temperature} /> 
          </div>
          <div className="history-table-wrapper">
            <HistotryList data={this.state.history}/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
