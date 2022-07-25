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
			historyList: [],
			historyIndex: 0,
			badRequest: false
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

	//function for openweathermap request with two GET req: first to geo for lat and lon, second for temperature by coordinates
	onSerchSubmit = async (location) => {
		this.setState({badRequest: true});
		//request for lat and lon by city name
		return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIKey}`)
			.then((geoResponse) => {
				return geoResponse.json();
			}).then((geoResponse) => {
				//request for temperature by coordinates
				fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoResponse[0].lat}&lon=${geoResponse[0].lon}&appid=${APIKey}`)
					.then((tempResponse) => {
						return tempResponse.json();
					}).then((response) => {
							return ({location:response.name,temperature:parseInt((response.main.temp)-273)});
						}).then((data) => {
							//call function for prop drilling to components
							this.onResponseFromServer(data);
						})
					.catch(function (e) {
						console.log(e);
					})
				}).catch(function (e) {
					console.log(e);
					});
	}

	//function for drilling and for written data to history List
	onResponseFromServer = (data) => {

		const {location,temperature,date,historyList,historyIndex,br} = this.state;
		const newHistory = [];

		//push new information on a start of list
		newHistory.push({
			key:historyIndex,
			location:data.location,
			date:date,
			temperature:data.temperature
		});
		//take into account the case when the list is full (over 5)
		if(historyIndex>4) {
			for(let i=0; i<4; i++){
				newHistory.push(historyList[i]);
			}
		} else {
			newHistory.push(...historyList);
		}

		this.setState({
			location: data.location,
			temperature: data.temperature,
			historyIndex: (historyIndex+1),
			historyList: newHistory,
			badRequest: false
		})
	}

	render () {
		return (
			<div className="App">
				<div className="grid">
					<div className="current-date-wrapper">
						<CurrentDate data={this.state.date}/>
					</div>
					<div className="search-panel-form-wrapper">
						<SearchPanelForm
							onSerchSubmit={this.onSerchSubmit}/>
					</div>
					<div className="result-wrapper">
						<Result location={this.state.location} temperature={this.state.temperature} badRequest={this.state.badRequest}/> 
					</div>
					<div className="history-table-wrapper">
						<HistotryList data={this.state.historyList}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
