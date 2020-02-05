import React from 'react';
import Posts from './Posts';

import '../App.css';


class App extends React.Component{

  render(){
    return (
      <div className="flex-container App">
        <h1>Posts:</h1>
        <Posts />
      </div>
    );
  }
}


export default App;
