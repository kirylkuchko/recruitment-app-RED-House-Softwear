import {Component} from 'react';
import "./search-panel-form.css";

class SearchPanelForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            location: ''
        }
    }

    //I use class field syntax for easy coding, instead of bind
    onValueChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }
    
    onSubmit = (e) => {
        this.props.onSerchSubmit(this.state.location);
        console.log(e);
        e.preventDefault();
    }

    render () {
        const {location} = this.state;

        //Made controlled form input for instant field validation and dynamic inputs
        return (
            <form className="search-panel-form" action="submit" onSubmit={this.onSubmit}>
                <input 
                    className="search-panel-form-input"
                    autoFocus={true}
                    placeholder="Search your location"
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