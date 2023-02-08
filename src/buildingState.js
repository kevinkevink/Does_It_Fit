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
    var ratio = virtualWidth / actualWidth;
    var virtualHeight = actualHeight;
    var heightRatio = virtualHeight / actualHeight;
    //console.log('virtual Width:' + virtualWidth);
    //console.log('virtual Height:' + virtualHeight);
    //console.log('ratio:' + ratio);
    //Right now, point is always [0,0]. Will have to update calculations to move point around.

    //finish changing point
    var returns = []
    var endPoint = [point[0] + virtualWidth, point[1] + virtualHeight]
    for(var i = 0; i < this.objs.length; i++){
      let obj = this.objs[i]
      if(obj.type === 'l' || obj.type ==='gl'){
        let xFails = (obj.start[0] < point[0] && obj.start[0] < endPoint[0]) ||
        (obj.start[0] > point[0] && obj.start[0] > endPoint[0]);
        let yFails = (obj.start[1] < point[1] && obj.start[1] < endPoint[1]) ||
        (obj.start[1] > point[1] && obj.start[1] > endPoint[1]);
        if(!xFails && !yFails){
          returns.push(this.changeObjectRatio(obj, ratio));
        }
      }
    }
    return returns;
  }

  changeObjectRatio(obj, ratio){
    var returnObj = {'type': obj['type'], 'start': [...obj['start']], 'end': [...obj['end']]}
    returnObj['start'] = returnObj['start'].map(val => val / ratio);
    returnObj['end'] = returnObj['end'].map(val => val / ratio);
    return returnObj;
  }

  createGrid(){
    console.log('create Grid');
    for(let i = 0; i < this.gridWidth + 1; i = i + 10){
      this.objs.push({'type': 'gl', 'start': [i,0], 'end': [i, this.gridHeight]});
    }

    for(let i = 0; i < this.gridHeight + 1; i = i + 10){
      this.objs.push({'type': 'gl', 'start': [0,i], 'end': [this.gridWidth, i]});
    }
    console.log(this.objs);
  }

}

export default buildingState;