import React from 'react';
import {connect} from 'react-redux';
import {setPost} from '../actions/postActions';
import Post from './Post';


const endpoint = "https://jsonplaceholder.typicode.com/posts";


class Posts extends React.Component{


    state = {
        isLoading: true
    }
    componentDidMount(){
        this.loadInformation();
    }

    loadInformation = () => {
        this.setState({isLoading: true});
        fetch(endpoint, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            this.props.setPost(data);
            this.setState({isLoading: false});
        })
    }
    
    render(){
        return this.state.isLoading?
            (
                <div className="flex-container posts-container">
                    Loading...
                </div>
            ):(
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