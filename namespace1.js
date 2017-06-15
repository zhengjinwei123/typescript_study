var mm;
(function (mm) {
    function add1(x, y) {
        return x + y;
    }
    mm.add1 = add1;
    var a = 1;
    var b = 2;
    function sub1(x, y) {
        var _x = x || a;
        var _y = y || b;
        return _x - _y;
    }
    mm.sub1 = sub1;
    var Animal1 = (function () {
        function Animal1(name) {
            this.name = name;
        }
        Animal1.prototype.say = function () {
            console.log("animal say:" + this.name);
        };
        return Animal1;
    }());
    mm.Animal1 = Animal1;
})(mm || (mm = {}));
console.log(mm.add1(1, 1));
//# sourceMappingURL=namespace1.js.map