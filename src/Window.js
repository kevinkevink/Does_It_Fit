import React, { Component } from 'react';
import './Window.css';
import buildingState from './buildingState';
import ZoomButton from './ZoomButton';

class Window extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      point: [0, 0],
      height: 0,
      width: 0,
      scale: 0.5,
      buildState: new buildingState()
    };
  }

  zoomIn = () => {
    this.setState({
      scale: this.state.scale + 0.5
    });
    console.log('zoom in, scale = ' + this.state.scale);

  }

  zoomOut = () => {
    this.setState({
      scale: this.state.scale - 0.5
    });
    console.log('zoom out, scale = ' + this.state.scale);
  }

  componentDidUpdate(){
    this.drawEverything();
  }

  componentDidMount(){
    this.setState({
      point: [0, 0],
      height: document.getElementById('view').offsetHeight,
      width: document.getElementById('view').offsetWidth,
      scale: 0.5
    });
    console.log(this.state.scale);
  }

  render(){
    //console.log('Window Width:' + this.state.width);
    //console.log('Window Height:' + this.state.height);
    return(
      <div id='view'>
        <ZoomButton zoomIn = {this.zoomIn} zoomOut = {this.zoomOut} />
        <canvas id='canvas' width={this.state.width} height={this.state.height}>
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
      ctx.stroke();
    }
  }

  drawLines(ctx){
    ctx.lineWidth = this.state.scale;
    var objs = this.state.buildState.getObjectsInScreen(this.state.point, this.state.width, 
      this.state.height, this.state.scale);
    for(var i = 0; i < objs.length; i++){
      var obj = objs[i];
      let startP = obj['start'];
      let endP = obj['end'];
      ctx.moveTo(startP[0], startP[1]);
      ctx.lineTo(endP[0], endP[1]);
    }
  }

}

export default Window;
