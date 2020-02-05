import React from 'react';


const Comment = (props) => {
    return (
        <div className="post">
            <h5>{props.name+"-"+props.email}</h5>
            <span className="body-text">{props.body}</span>
        </div>
    )
}

export default Comment;


