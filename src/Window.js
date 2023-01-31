import React, { Component } from 'react';
import './Window.css';

class Window extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      point: [0, 0],
      height: 0,
      width: 0,
      scale: 1
    };
  }

  componentDidMount(){
    this.setState({
      point: [0, 0],
      height: document.getElementById('view').offsetHeight,
      width: document.getElementById('view').offsetWidth,
      scale: 1
    });
    this.drawGrid();
  }

  render(){
    this.drawGrid();
    return(
      <div id='view'>
        <canvas id='canvas' width={this.state.width} height={this.state.height} >
          Canvas isn't working
        </canvas>
      </div>
    );

  }

  drawGrid(){
    var c = document.getElementById('canvas');
    if(c !== null){
      var ctx = c.getContext("2d");
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(3000, 150);
      ctx.moveTo(50, 0);
      ctx.lineTo(450, 150);
      ctx.stroke();
    }
  }
}

export default Window;
