let log = function(message)
{
    console.log(message);
}

let doLog = (message) => {
    console.log(message);
}

let doLog2 = (message) => console.log(message);

let doLog3 = message => console.log(message);
// doLog3 is less readable than doLog2

log('test');
doLog('test');
doLog2('test');
doLog3('test');

let drawPoint = (point) => {
    //...
    console.log(point.x, point.y);
}

drawPoint({
    x: 1,
    y: 2
});

// in-line annotation for simpler cases. not good for many. ==> interfaces are used
let drawPointInLine = (point : {x : number, y : number}) => {
    //...
    console.log(point.x, point.y);
}

drawPointInLine({
    x: 5,
    y: 4
});

// with interface, shape of an object is defined
interface Point{
    x: number,
    y: number
}

let drawPointWithInterface = (point : Point) => {
    //...
    console.log(point.x, point.y);
}

// here we violates cohesion concept. That is related contents
// should go together ==> concept of class came into the
// picture
// A class groups variables (properties) and functions (methods)
// that are highly related
let getDistance = (pointA : Point, pointB : Point) => {
    //...
    console.log(pointA, pointB);
}

drawPointWithInterface({
    x: 6,
    y: 8
});

interface PointInterfaceForClass
{
    x: number,
    y: number,

    draw: () => void
}

class PointClass
{
    x: number;
    y: number;

    /*
    // mandatory parameters
    constructor(x : number, y : number)
    {
        this.x = x;
        this.y = y;
    }
    */

    // optional parameters
    constructor(x? : number, y? : number)
    {
        this.x = x;
        this.y = y;
    }

    draw(){
        // ...
        console.log(this.x, this.y);
    }

    getDistance(another: Point)
    {
        // ...
    }
}

// field : property of a class
// method : function of a class
// pointClass is an object - an instance of the class PointClass
let pointClass : PointClass;
// when dealing with custom type, need to explicitly allocate memory.
// otherwise runtime error.
pointClass = new PointClass(7, 3);
// or let point: Point = new Point(7, 3); also work
pointClass.draw();

// we can't have multiple constructors in TypeScript
// ==> make constructor parameters optional
let pointClassWithoutParameter = new PointClass();
pointClassWithoutParameter.x = 7;
pointClassWithoutParameter.y = 2;
pointClassWithoutParameter.draw();

// three access modifiers : public, private, protected
// by default all variables are public