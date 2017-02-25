/**
 * Created by XinyuYang on 17/2/24.
 */


export class activistdata {
  points: number;
  name: string;
  eventsattending: string;


  constructor(){
    this.eventsattending = "a";
    this.points = 0;
    this.name = 'Name';
  }

  getPoints(){
    return this.points;
  }
}
