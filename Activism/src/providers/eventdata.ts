export class eventdata {
  location: string;
  name: string;
  time: Date;
  org: Object;
  peopleAttending: Array<Object>;


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

  getPeopleAttending() {
      return this.peopleAttending;
  }

  setName(name) {
      this.name = name;
  }

  setLocation(location) {
      this.location = location;
  }

  setOrg(org) {
      this.org = org;
  }

  setTime(time) {
      this.time = time;
  }

  addPerson(per){
      this.peopleAttending.push(per);
  }

}
