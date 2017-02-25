export class eventdata {
  location: string;
  name: string;
  time: Date;
  org: Object;

  constructor(name, location, time, org){
    this.name = name;
    this.location = location;
    this.time = time;
    this.org = org;
  }

  getName() {
      return this.name;
  }

  getLocation() {
      return this.location;
  }

  getTime() {
      return this.time;
  }

  getOrg() {
      return this.org;
  }

}
