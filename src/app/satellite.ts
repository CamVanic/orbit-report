export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string; //may need to switch position on some of these if they don't line up with thier values.
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name= name;
        this.type= type;
        this.launchDate=launchDate;
        this.operational= operational;
        this.orbitType= orbitType;
    }
}
