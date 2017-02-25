export class organizationdata {
    name: string;
    eve: Array<Object>;
    links: Array<String>;
    logo: ImageData;

  constructor(name, logo){
    this.name = name;
    this.eve= new Array();
    this.links = new Array();
    this.logo = logo;
  }

  getName() {
      return this.name;
  }

  getEvents() {
      return this.eve;
  }

  getLinks() {
      return this.links;
  }

  getLogo() {
      return this.logo;
  }

  
}
