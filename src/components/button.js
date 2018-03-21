import React from 'react';

export default props => {

    function handleClick() {
        console.log("button clicked");

        props.updateColor();
    }

    return(
        <div>
            <button className="btn btn-outline-success" onClick={handleClick}>Click Here!</button>
        </div>
    )
}

/*handleClick is a callback function so we dont want to include ()*/
