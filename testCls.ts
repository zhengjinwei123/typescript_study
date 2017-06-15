let func = function(a:number,b:string){
    return `my name is ${b} and age is ${a}`;
};

console.log(func(27,'zjw'));

// 定义一个类
class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }

    greet(){
        return  `hello,${this.greeting}`;
    }
}

let greeter = new Greeter('world');

console.log(greeter.greet());

// 继承

class Animal{
    protected pNumber:number=28;
    name:string;
    constructor(theName:string){
        this.name = theName;
    }
    move(distanceInMeters:number=0){
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}

class Snake extends Animal{
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters=5){
        console.log("Slithering");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal{
    constructor(name:string){super(name);}
    move(distanceInMeters=45){
        console.log("Galloping");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom:Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// readonly

class Octopus{
    public name2:string;
    readonly name:string;
    readonly numberOfLegs:number;
    constructor(theName:string){
        this.name2 = theName+"2";
    }
}

let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "";
dad.name2 = "haha";

// 存取器
let passcode = "secret passcode";

class Employee{
    private _fullName:string;
    get fullName():string{
        return this._fullName;
    }
    set fullName(newName:string){
        if(passcode && passcode === 'secret passcode'){
            this._fullName = newName;
        }else{
            console.error("Error:Unauthorized update the fullName");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if(employee.fullName){
    console.log(employee.fullName);
}

// 静态属性
class Grid{
    static origin = {x:0,y:0};
    calculateDistanceFromOrigin(p:{x: number;y: number;}){
        let xDist = (p.x - Grid.origin.x);
        let yDist = (p.y - Grid.origin.y);
        return Math.sqrt(xDist*xDist+yDist*yDist);
    }

    constructor(public scale:number){

    }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// 抽象类


abstract class Department{
    constructor(public name:string){

    }
    printName():void{
        console.log('Department name: ' + this.name);
    }
    abstract printMeeting():void;
}

class AccountingDepartment extends Department{
    constructor(){
        super("accounting and auditing");
    }

    printMeeting():void{
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();

// 接口
interface SquareConfig{
    color?:string;
    width?:number;
}

function createSquare(config:SquareConfig):{color:string;area:number}{
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"});

// 函数
let myAdd = function(x: number, y: number): number { return x+y; };

console.log(myAdd(1,2));



// 泛型

function identify<T>(arg:T):T{
    return arg;
}
let output = identify<string>("my name is zjw");
console.log(output);
let output2 = identify<number>(111);
console.log(output2);
let output3 = identify<object>({a:1,b:2});
console.log(output3);
let output4 = identify<any>("any");
console.log(output4);

// 类型兼容性

let x  =(a:number) => a;
let y = (b:number,s:string) =>0;

console.log(x(1));

// symbol
let sym = Symbol();
let obj = {
  [sym]:"value"
};

console.log(obj[sym]);
console.log([sym]);

// 迭代器
let someArray = [1,"strig",false];

console.log(someArray);
for(let i in someArray){
    console.log(i,someArray[i]);
}

for(let i of someArray){
    console.log(i);
}

// 模块
import * as _ from 'lodash';
_.each([1,2,3],function(v,k){
    console.log(k,v)
});

import * as m from './export1';
import {add,sub} from './export1';

console.log(m.add(1,2));
console.log(m.sub(1,2));
console.log(add(2,2));
/// <reference path="node.d.ts"/>
import * as fs from 'fs';
let contentText = fs.readFileSync('./test1.js','utf-8');
console.log(contentText);

