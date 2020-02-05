import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setComment} from '../actions/postActions';
import Comments from './Comments';
const endpoint = "https://jsonplaceholder.typicode.com/comments";


const Post = (props) => {

    const [shouldPopupOpens, setShouldPopupOpens] = useState(false);

    const loadInformation = () => {
        fetch(endpoint, {method: 'GET'})
        .then(res => res.json())
        .then(data => [...data, ...props.comment.newComments].filter(item => item.postId === props.post.id))
        .then(dataFiltered => {
            props.setComment(dataFiltered);
            setShouldPopupOpens(!shouldPopupOpens);
        })
    }

    const handlePopup = (action) => {
        action === 'open'?loadInformation():setShouldPopupOpens(!shouldPopupOpens);
    }

    let paramss = {
        comments: props.comment.comments,
        post: props.post,
        handlePopup
    }
   
    return (
        <div className="flex-container post border-container over-flow">
            <div onClick={()=>handlePopup('open')}>
                <h3>{props.post.title}</h3>
                <span className="body-text">{props.post.body}</span>
            </div>
            {shouldPopupOpens?<Comments {...paramss} />:null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      comment: state.postReducer
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      setComment: (comment) => {
        dispatch(setComment(comment));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Post);

