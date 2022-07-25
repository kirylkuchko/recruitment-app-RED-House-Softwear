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
      date: this.createDate()
    }
    
  }

  createDate = () => {
    const today = new Date();
    return {day:today.getDate(),
            month:today.getMonth(),
            year:today.getFullYear()
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
                temperature: tempResponse.main.temp
              });
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

  render () {
     //test data for history list
    const dataForHistoryList = 
        [{key:1,location:'New York',date:'2022-07-21',temperature:'32°C'},
        {key:2,location:'Paris',date:'2022-07-21',temperature:'32°C'},
        {key:3,location:'Warsaw',date:'2022-07-21',temperature:'32°C'},
        {key:4,location:'Minsk',date:'2022-07-21',temperature:'32°C'},
        {key:5,location:'Amsterdam',date:'2022-07-21',temperature:'32°C'}];


    return (
      <div className="App">
        <div className="grid">
          <div className="current-date-wrapper">
            <CurrentDate date={this.state.date}/>
          </div>
          <div className="search-panel-wrapper">
            <SearchPanelForm
              onSerchSubmit={this.onSerchSubmit}/>
          </div>
          <div className="result-wrapper">
            <Result temperature='32°C' location='Minsk'/> 
          </div>
          <div className="history-table-wrapper">
            <HistotryList data={dataForHistoryList}/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
