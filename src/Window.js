import React, { Component } from 'react';
import './Window.css';
import buildingState from './buildingState';

class Window extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      point: [0, 0],
      height: 0,
      width: 0,
      scale: 1,
      buildState: new buildingState()
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
      ctx.lineWidth = 50;
      var objs = this.state.buildState.getObjectsInScreen(this.state.point, this.state.width, 
        this.state.height, this.state.scale);
      ctx.beginPath();
      for(var i = 0; i < objs.length; i++){
        var obj = objs[i];
        let startP = obj['start'];
        let endP = obj['end'];
        console.log(startP);
        ctx.moveTo(startP[0], startP[1]);
        ctx.lineTo(endP[0], endP[1]);
      }
      ctx.stroke();
    }
  }
}

export default Window;
