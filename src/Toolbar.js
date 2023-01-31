import React, { Component } from 'react';
import './Toolbar.css';
import LineTool from './LineTool'

class Toolbar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div id='bar'>
      <LineTool/>
    </div>
    );

  }
}

export default Toolbar;
