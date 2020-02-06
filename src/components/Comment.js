import React from 'react';


const Comment = (props) => {
    return (
        <div className="post border-container">
            <h6>{props.name+"-"+props.email}</h6>
            <span className="body-text">{props.body}</span>
        </div>
    )
}

export default Comment;


