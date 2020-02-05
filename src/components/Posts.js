import React from 'react';
import {connect} from 'react-redux';
import {setPost} from '../actions/postActions';
import Post from './Post';


const endpoint = "https://jsonplaceholder.typicode.com/posts";


class Posts extends React.Component{


    componentDidMount(){
        this.loadInformation();
    }

    loadInformation = () => {
        fetch(endpoint, {method: 'GET'})
        .then(res => res.json())
        .then(data => {this.props.setPost(data)})
    }
    
    render(){
        return (
            <div className="flex-container posts-container">
                {
                    this.props.post.posts.map((post)=>{
                        return <Post post={post} key={post.id}/>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      post: state.postReducer
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setPost: (post) => {
        dispatch(setPost(post));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Posts);