/**
 * Created by XinyuYang on 17/2/24.
 */


export class activistdata {
  points: number;
  name: string;
  eventsattending: Array<Object>;


  constructor(name){
    this.eventsattending = new Array();
    this.points = 0;
    this.name = name;
  }

  getPoints(){
    return this.points;
  }
}
