//function area(shape: string, width: number, height: number) {
//    var area = width * height;
//    return "I'm a " + shape + " with an area of " + area + " cm squared.";
//}
//
//area("22222",1,2);

//interface Shape{
//    name:string;
//    width:number;
//    height:number;
//    color:string;
//}
//
//function area(shape: Shape){
//    var area = shape.width*shape.height;
//    return "I'm " + shape.name + " with area " + area + " cm squared";
//}
//console.log(area( {name: "rectangle", width: 30, height: 15} ) );
//console.log(area( {name: "square", width: 30, height: 30, color: "blue"} ) );



//var shape = {
//    name:'rectangle',
//    popup:function(){
//        setTimeout(()=>{
//            console.log('This inside setTimeout(): ' + this.name);
//            console.log("I'm a " + this.name + "!");
//        })
//    }
//};
//
//shape.popup();


//
//class Shape{
//    area:number;
//    color:string;
//    name:string;
//
//    constructor(name:string,width:number,height:number){
//        this.area = width*height;
//        this.color='pink';
//    }
//
//    shoutout(){
//        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
//    }
//}
//
//class Shape3D extends Shape{
//    volume:number;
//
//    constructor(public name:string,width:number,height:number,length:number){
//        super(name,width,height);
//        this.volume = length*this.area;
//    }
//
//    shoutout(){
//        return "I'm " + this.name +  " with a volume of " + this.volume + " cm cube.";
//    }
//
//    superShout(){
//        return super.shoutout();
//    }
//}
//
//var cube = new Shape3D("cube", 30, 30, 30);
//console.log( cube.shoutout() );
//console.log( cube.superShout() );

//let isDone:boolean = false;
//var isDone2:boolean = true;
//console.log(isDone);
//
//function identity<T>(arg:T):T{
//    return arg;
//}
//
//let output = identity<string>("myString");
//
//enum Direction{
//    Up=1,
//    Down,
//    Left,
//    Right
//}
//
let someArray = [1, "string", false];

for(let e of someArray){
    console.log(e);
}

function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or 1111 2222 number, got '${padding}'.");
}

padLeft("Hello world", 4); // returns "    Hello world"

let a  =1;
console.log(`${a}`);