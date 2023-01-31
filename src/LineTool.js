import React, { Component } from 'react';
import './LineTool.css';

class LineTool extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button className ='toolButton'>
        Line
      </button>
    );

  }
}

export default LineTool;
