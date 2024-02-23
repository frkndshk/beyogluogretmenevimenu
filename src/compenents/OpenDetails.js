import React from 'react';
import "./styles.css"


function OpenDetails(props) {
    return (

    <div className="OpenDetails">

        <div class="popup-content">
            <span class="close-btn" onClick={props.show } >&times;</span>
            <img className="detailsImg" src={props.item.image} alt={props.item.name} />
            <p>{props.item.description}</p>
            <p>Price: ${props.item.price}</p>
        </div>
        
        </div>
    );
}

export default OpenDetails;
