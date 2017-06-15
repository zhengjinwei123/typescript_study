"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var func = function (a, b) {
    return "my name is " + b + " and age is " + a;
};
console.log(func(27, 'zjw'));
// 定义一个类
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello," + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
console.log(greeter.greet());
// 继承
var Animal = (function () {
    function Animal(theName) {
        this.pNumber = 28;
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters);
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
// readonly
var Octopus = (function () {
    function Octopus(theName) {
        this.name2 = theName + "2";
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// dad.name = "";
dad.name2 = "haha";
// 存取器
var passcode = "secret passcode";
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.error("Error:Unauthorized update the fullName");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
// 静态属性
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (p) {
        var xDist = (p.x - Grid.origin.x);
        var yDist = (p.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist);
    };
    return Grid;
}());
Grid.origin = { x: 0, y: 0 };
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// 抽象类
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "accounting and auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
// 函数
var myAdd = function (x, y) { return x + y; };
console.log(myAdd(1, 2));
// 泛型
function identify(arg) {
    return arg;
}
var output = identify("my name is zjw");
console.log(output);
var output2 = identify(111);
console.log(output2);
var output3 = identify({ a: 1, b: 2 });
console.log(output3);
var output4 = identify("any");
console.log(output4);
// 类型兼容性
var x = function (a) { return a; };
var y = function (b, s) { return 0; };
console.log(x(1));
// symbol
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]);
console.log([sym]);
// 迭代器
var someArray = [1, "strig", false];
console.log(someArray);
for (var i in someArray) {
    console.log(i, someArray[i]);
}
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var i = someArray_1[_i];
    console.log(i);
}
// 模块
var _ = require("lodash");
_.each([1, 2, 3], function (v, k) {
    console.log(k, v);
});
var m = require("./export1");
var export1_1 = require("./export1");
console.log(m.add(1, 2));
console.log(m.sub(1, 2));
console.log(export1_1.add(2, 2));
/// <reference path="node.d.ts"/>
var fs = require("fs");
var contentText = fs.readFileSync('./test1.js', 'utf-8');
console.log(contentText);
var _a;
//# sourceMappingURL=testCls.js.map