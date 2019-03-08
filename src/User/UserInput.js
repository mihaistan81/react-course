import React from 'react';
import './User.css';

const userInput = (inputProps) => {
    const inputStyle = {
        border: '2px solid red'
    };
    return (
        <div className="userInput">
            Username: <input type="text" style={inputStyle} onChange={inputProps.change} value={inputProps.username}/>
        </div>
    );
};

export default userInput;