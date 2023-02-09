import React, { Component } from 'react';
import './ZoomButton.css';

class ZoomButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id='zoomWrapper'>
      <button className ='toolButton' onClick={this.props.zoomOut}>
        +
      </button>
      <button className ='toolButton' onClick={this.props.zoomIn}>
        -
      </button>
    </div>
    );

  }
}

export default ZoomButton;
