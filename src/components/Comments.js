import React, {useState} from 'react';
import {connect} from 'react-redux';
import Comment from './Comment';

import {addComment} from '../actions/postActions'

const Comments = (props)=>{

    const [newComment, setNewComment] = useState('');

    return (
        <div className="comments-popup">
            <div className="flex-container comments-popup_inner border-container">
                <div className="popup-header over-flow" >
                    <h3>{props.post.title+" - POST ID:"+props.post.id}</h3>
                    <span className="body-text">{props.post.body}</span>
                </div>
                <div className="flex-container popup-body" >
                    <div><label>Comments:</label></div>
                    <div className="over-flow">
                        {
                            props.comments.map(item => {
                                return (<div key={item.id}><Comment {...item} /><hr style={{width: '90%'}}/></div>)
                            })
                        }
                    </div>
                    <div className="input-container">
                        <input type="text" onChange={event=>setNewComment(event.target.value)} placeholder="Add new comment"/>
                        <button 
                            onClick={()=>newComment!==''?props.addComment({
                                postId: props.post.id, 
                                id: props.comments.length,
                                name: "Test",
                                email: "test@test.to",
                                body: newComment
                            }):null}
                        >Post</button>
                    </div>
                    <div className="align-self-center">
                        <button onClick={()=>props.handlePopup('close')} >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      addComment: (comment) => {
        dispatch(addComment(comment));
      }
    }
  }

export default connect(null, mapDispatchToProps)(Comments);