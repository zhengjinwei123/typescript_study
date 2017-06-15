namespace mm{
    export function add1(x:number,y:number){
        return x+y;
    }

    const a = 1;
    const b = 2;

    export function sub1(x,y){
        let _x  = x || a;
        let _y =  y || b;
        return _x - _y;
    }

    export class Animal1{
        constructor(public name:string){

        }
        say(){
            console.log("animal say:"+this.name);
        }
    }
}
console.log(mm.add1(1,1));