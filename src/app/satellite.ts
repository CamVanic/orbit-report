export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    changeBackground: boolean;
    
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name= name;
        this.type= type;
        this.launchDate=launchDate;
        this.operational= operational;
        this.orbitType= orbitType;
    }

    shouldShowWarning() {
        if(this.type.toLocaleLowerCase() === "space debris"){
            return this.changeBackground= true;
        }else{
            return this.changeBackground= false;
        }
    }
}
