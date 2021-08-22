export class Quote {

    public showDescription:boolean;
    constructor(public name:string, public description:string, public author:string, public submission:string, public likes:number, public dislikes:number, public postDate:Date){
        this.showDescription=false;
    }
}
    // showDescription: boolean;
    // constructor(public id: number,public name:string,public description:string){
    //     this.showDescription=false;
    // }
    // id!: number;
    // name!: string;
    // description!: string;
