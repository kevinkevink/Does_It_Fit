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

  componentDidUpdate(){
    this.drawEverything();
  }

  componentDidMount(){
    this.setState({
      point: [0, 0],
      height: document.getElementById('view').offsetHeight,
      width: document.getElementById('view').offsetWidth,
      scale: 1
    });
  }

  render(){
    return(
      <div id='view'>
        <canvas id='canvas' width={this.state.width} height={this.state.height} >
          Canvas isn't working
        </canvas>
      </div>
    );

  }

  drawEverything(){
    var c = document.getElementById('canvas');
    if(c !== null){
      var ctx = c.getContext("2d");
      ctx.beginPath()
      this.drawLines(ctx);
      this.drawGrid(ctx);
      ctx.stroke();
    }
  }

  drawGrid(ctx){
    var vLineNum = this.state.width / 100;
    var hLineNum = this.state.height / 100;
    ctx.lineWidth = 5;
    for(var i = 0; i < vLineNum; i++){
      ctx.moveTo(i * 100, 0 );
      ctx.lineTo(i * 100, this.state.height);
      ctx.stroke();
    }
    for(var i = 0; i < hLineNum; i++){
      ctx.moveTo(0, i* 100);
      ctx.lineTo(this.state.width, i * 100);
    }
  }

  drawLines(ctx){
    ctx.lineWidth = 2;
    var objs = this.state.buildState.getObjectsInScreen(this.state.point, this.state.width, 
      this.state.height, this.state.scale);
    for(var i = 0; i < objs.length; i++){
      var obj = objs[i];
      let startP = obj['start'];
      let endP = obj['end'];
      console.log(startP);
      ctx.moveTo(startP[0], startP[1]);
      ctx.lineTo(endP[0], endP[1]);
    }
  }
}

export default Window;
