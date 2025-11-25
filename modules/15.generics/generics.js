var generic;
generic = [1, 2, 3, 4, 5, 6, 67];
console.log(generic);
function fun(args) {
    return args;
}
var result = fun("Hello World");
var result2 = fun(200);
console.log(result);
console.log(result2);
function fu(args1, args2, args3) {
    return args3;
}
var result3 = fu("hey", 3, false);
console.log(result3);
var customArray = /** @class */ (function () {
    function customArray() {
        this.arr = [];
    }
    customArray.prototype.getItems = function (arr) {
        return (this.arr = arr);
    };
    customArray.prototype.addItem = function (item) {
        this.arr.push(item);
    };
    customArray.prototype.removeItem = function (item) {
        var index = this.arr.indexOf(item);
        if (index > -1)
            this.arr.splice(index, 1);
    };
    return customArray;
}());
var numObj = new customArray();
numObj.addItem(10);
var strObj = new customArray();
strObj.addItem("Person");
console.log(numObj);
console.log(strObj);
