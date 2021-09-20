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
    private x: number;
    private y: number;

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

    /*
    // if constructor is written in this manner, TypeScript knows
    // to generate private optional fields and it will initialize
    // those values inside this
    constructor(private x? : number, private y? : number)
    {
    }*/

    draw(){// adding public modifier here is redundant: public draw() : since by default, it's public
        // ...
        console.log(this.x, this.y);
    }

    getDistance(another: Point)
    {
        // ...
    }

    setX(x : number)
    {
        this.x = x;
    }

    getX()
    {
        return this.x;
    }

    setY(y : number)
    {
        if(y < 0)
        {
            throw new Error('y cannot be less than zero');
        }
        else
        {
            this.y = y;
        }
    }

    getY()
    {
        return this.y;
    }
}

// field : property of a class
// method : function of a class
// field & method are known as members
// constructors are not members
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
pointClassWithoutParameter.setX(7);
pointClassWithoutParameter.setY(2);
pointClassWithoutParameter.draw();

// three access modifiers : public, private, protected
// by default all members are public

// when fields are associated with getters and setters
// they can use the feature of property

class PointClassWithProperty
{
    constructor(private _x? : number, private _y? : number)
    {
    }

    draw(){// adding public modifier here is redundant: public draw() : since by default, it's public
        // ...
        console.log(this._x, this._y);
    }

    set x(value : number)
    {
        this._x = value;
    }

    get x()
    {
        return this._x;
    }

    set y(value : number)
    {
        if(value < 0)
        {
            throw new Error('y cannot be less than zero');
        }
        else
        {
            this._y = value;
        }
    }

    get y()
    {
        return this._y;
    }
}

let pointClassWithProperty = new PointClassWithProperty();
pointClassWithProperty.x = 5;
pointClassWithProperty.y = 3;

console.log(pointClassWithProperty.x, pointClassWithProperty.y);
// even though a property looks like a field of a class
// internally it's a method in a class

