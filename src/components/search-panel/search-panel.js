import "./search-panel.css";

const SearchPanel = () => {
    return (
        <form className="search-panel" action="submit">
            <input 
                type="text"
                className="search-panel-input"
                pattern="search" 
                required={true} 
                defaultValue="Search your location"/>
            <button className="search-panel-button">
                    
            </button>
        </form>
    )
}

export default SearchPanel;