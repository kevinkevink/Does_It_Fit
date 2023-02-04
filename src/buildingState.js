class buildingState{
  constructor(){
    this.objs = [{'type': 'l', 'start': [0,20], 'end': [0, 200]}];
    this.defaultVirtualWidth = 400;
    this.gridHeight = 500;
    this.gridWidth = 1000;
    this.createGrid();
  }

  //Can be more efficient by keeping two arrays in memmory
  getObjectsInScreen(point, actualWidth, actualHeight, scale){
    var virtualWidth = this.defaultVirtualWidth * scale;
    var ratio = virtualWidth / width;
    var virtualHeight = ratio * actualHeight;
    //Right now, point is always [0,0]. Will have to update calculations to move point around.

    //finish changing point
    var returns = []
    var endPoint = [point[0] + virtualWidth, point[1] + virtualHeight]
    for(var i = 0; i < this.objs.length; i++){
      let obj = this.objs[i]
      if(obj.type === 'l'){
        let xFails = (obj.start[0] < point[0] && obj.start[0] < endPoint[0]) ||
        (obj.start[0] > point[0] && obj.start[0] > endPoint[0]);
        let yFails = (obj.start[1] < point[1] && obj.start[1] < endPoint[1]) ||
        (obj.start[1] > point[1] && obj.start[1] > endPoint[1]);
        if(!xFails && !yFails){
          returns.push(this.changeObjectRatio(obj, ratio));
        }
      }
    }
    console.log(returns);
    return returns;
  }

  changeObjectRatio(obj, ratio){
    returnObj = {'type': obj['type'], 'start': [...obj['start']], 'end': [...obj['end']]}
    returnObj['start'] = returnObj['start'].map(val => val * ratio);
    returnObj['end'] = returnObj['end'].map(val => val * ratio);
    return returnObj;
  }

  createGrid(){
    //creates lines for grid based on this code
    
    /*
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
    */
  }
}


export default buildingState;