class buildingState{
  constructor(){
    this.objs = [{'type': 'l', 'start': [0,20], 'end': [0, 200]}];
  }

  //Can be more efficient by keeping two arrays in memmory
  getObjectsInScreen(point, width, height, scale){
    let returns = []
    var endPoint = [point[0] + scale * width, point[1] + scale*height]
    for(var obj in this.objs){
      console.log(obj);
      if(obj.type === 'l'){
        let xFails = (obj.start[0] < point[0] && obj.start[0] < endPoint[0]) ||
        (obj.start[0] > point[0] && obj.start[0] > endPoint[0]);
        let yFails = (obj.start[1] < point[1] && obj.start[1] < endPoint[1]) ||
        (obj.start[1] > point[1] && obj.start[1] > endPoint[1]);
        if(!xFails && !yFails){
          returns.push(obj);
        }
      }
    }
    console.log(returns);
    return returns;
  }

  
}


export default buildingState;