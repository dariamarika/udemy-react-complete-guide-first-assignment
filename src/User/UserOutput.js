import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    const style = {
        fontSize: '200%',
        border: '1px solid white',
        width: '80%',
        textAlign: 'center',
        padding: '8px',
        margin: '0'
    }

    return (
        <div className="UserOutput">
            <p>{props.firstname}</p>
            <p style={style}>{props.username}</p>            
        </div>
    )
}

export default userOutput;