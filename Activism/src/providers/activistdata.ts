/**
 * Created by XinyuYang on 17/2/24.
 */


export class activistdata {
  points: number;
  name: string;
  eventsattending: Array<Object>;


  constructor(){
    this.eventsattending = new Array();
    this.points = 0;
    this.name = name;
  }

  getPoints(){
    return this.points;
  }

  getName(){
      return this.name;
  }

  getEventsAttended(){
      return this.eventsattending;
  }

  setName(name){
      this.name = name;
  }

  addPoints(points){
      this.points+=points;
  }
}
