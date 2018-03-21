import React from 'react';

// export default props => {
//
// }

export default function ( props ) {
    console.log('box props: ' + props);

    const boxStyle = {
        display:  'inline-block',
        height: '150px',
        width: '150px',
        backgroundColor: props.color,
        margin: '15px',
        trasitionDuration: '500ms'
    };
    return <div style={boxStyle} />;
}