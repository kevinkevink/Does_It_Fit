import React, { Component } from 'react';
import './Window.css';

class Window extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id='view'>
        <canvas>
        Canvas isn't working
        </canvas>
      </div>
    );

  }
}

export default Window;
