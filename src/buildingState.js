class buildingState{
  constructor(){
    this.objs = [{'type': 'l', 'start': [0,20], 'end': [0, 200]}];
  }

  getObjectsInScreen(point, width, height, scale){
    returns = []
    endPoint = [point[0] + scale * width, point[1] + scale*height]
    for(obj in this.objs){
      if(obj.type == 'l'){
        if(((obj.start[0] < point[0] && obj.start[0] < endPoint[0]) ||
           (obj.start[0] > point[0] && obj.start[0] > endPoint[0])) ||
           ((obj.start[1] < point[1] && obj.start[1] < endPoint[1]) ||
           (obj.start[1] > point[1] && obj.start[1] > endPoint[1]))) {

           }
      }
    }
  }

  
}


export default buildingState;