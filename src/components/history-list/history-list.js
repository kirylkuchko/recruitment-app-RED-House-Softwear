import './history-list.css';
import HistotryListItem from '../history-list-item/history-list-item';

const HistotryList = ({data}) => {

    //the function automatically generates list items based on received data from local storage
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <HistotryListItem key={id} {...itemProps}/>
        )
    });

   
    return (
        <>
            <h3 className="history-list-header">Previous locations</h3>
            <ul className="history-list">
                {elements}
            </ul>
        </>
    )
}

export default HistotryList;