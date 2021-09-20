function log(message) {
    console.log(message);
}
var message = 'Hello world!!';
log(message);
var number = 1;
var count = 2;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
    // if let i is used instead for var i
    // i will not be accessible outside the
    // for block. compile error due to the
    // TypeScript compiler
}
doSomething();
var numeric = 5;
//numeric = "a"; 
// compilation error since trying to assign
// a string to a numeric variable. error from
// tsc
var a;
a = 1;
a = true;
a = 'a';
// now even typescript will not complaint then 
// if we don't know the initial value of a 
// variable ==> need to add the type of it as below:
var aModified;
aModified = 1;
//aModified = true; // it will fail now
var numericType;
var b;
var c;
var d;
var e; // let e: number[] = [1, 2, 3]
var f = [1, true, 'a'];
var COLOR_RED = 0;
var COLOR_GREEN = 1;
var COLOR_BLUE = 2;
// group of related constants: enum (Eg: color)
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["GREEN"] = 1] = "GREEN";
    color[color["BLUE"] = 2] = "BLUE";
    // internally RED = 0, GREEN = 1, BLUE = 2
    // even though it's not explicitly assigned.
    // but good to add them since in future
    // if someone adds another color in the
    // middle it will change the number of them
})(color || (color = {}));
var background = color.BLUE;
var newString = 'abc';
// newString. will give available functions for string
console.log(newString.endsWith('c'));
