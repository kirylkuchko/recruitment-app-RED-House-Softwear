import {Component} from 'react';
import "./search-panel-form.css";

class SearchPanelForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            location: ''
        }
    }

    onValueChange = (e) => {

/*         if (e.target.value === 'Search your location') {
            this.setState({
                location: ''
            });
        } 

        if (e.target.value === '') {
            this.setState({
                location: 'Search your location'
            })
        } */

        this.setState({
            location: e.target.value
        })
    }

    onSubmit = (e) => {
        console.log(e);
        this.props.onSerchSubmit(this.state.location);
        e.preventDefault();
    }

    render () {
        const {location} = this.state;

        //Made controlled form input for instant field validation and dynamic inputs
        return (
            <form className="search-panel-form" action="submit" onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    className="search-panel-form-input"
                    autoFocus={true}
                    name="location"
                    value={location}
                    onChange={this.onValueChange} 
                    maxLength='30'/>
                <button className="search-panel-form-button"></button>
            </form>
        )
    }
}    


export default SearchPanelForm;