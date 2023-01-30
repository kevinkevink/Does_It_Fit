import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div id='bar'>
      <p style={{margin: 0}}>Hello, Champ</p>
    </div>
    );

  }
}

export default Toolbar;
