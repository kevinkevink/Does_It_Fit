import React, { Component } from 'react';
import './LineTool.css';

class LineTool extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button className ='toolButton' onClick={()=>{console.log('line')}}>
        Line
      </button>
    );

  }
}

export default LineTool;
