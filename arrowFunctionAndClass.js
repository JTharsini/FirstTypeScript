var log = function (message) {
    console.log(message);
};
var doLog = function (message) {
    console.log(message);
};
var doLog2 = function (message) { return console.log(message); };
var doLog3 = function (message) { return console.log(message); };
// doLog3 is less readable than doLog2
log('test');
doLog('test');
doLog2('test');
doLog3('test');
var drawPoint = function (point) {
    //...
    console.log(point.x, point.y);
};
drawPoint({
    x: 1,
    y: 2
});
// in-line annotation for simpler cases. not good for many. ==> interfaces are used
var drawPointInLine = function (point) {
    //...
    console.log(point.x, point.y);
};
drawPointInLine({
    x: 5,
    y: 4
});
var drawPointWithInterface = function (point) {
    //...
    console.log(point.x, point.y);
};
// here we violates cohesion concept. That is related contents
// should go together ==> concept of class came into the
// picture
// A class groups variables (properties) and functions (methods)
// that are highly related
var getDistance = function (pointA, pointB) {
    //...
    console.log(pointA, pointB);
};
drawPointWithInterface({
    x: 6,
    y: 8
});
var PointClass = /** @class */ (function () {
    /*
    // mandatory parameters
    constructor(x : number, y : number)
    {
        this.x = x;
        this.y = y;
    }
    */
    // optional parameters
    function PointClass(x, y) {
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
    PointClass.prototype.draw = function () {
        // ...
        console.log(this.x, this.y);
    };
    PointClass.prototype.getDistance = function (another) {
        // ...
    };
    PointClass.prototype.setX = function (x) {
        this.x = x;
    };
    PointClass.prototype.getX = function () {
        return this.x;
    };
    PointClass.prototype.setY = function (y) {
        if (y < 0) {
            throw new Error('y cannot be less than zero');
        }
        else {
            this.y = y;
        }
    };
    PointClass.prototype.getY = function () {
        return this.y;
    };
    return PointClass;
}());
// field : property of a class
// method : function of a class
// field & method are known as members
// constructors are not members
// pointClass is an object - an instance of the class PointClass
var pointClass;
// when dealing with custom type, need to explicitly allocate memory.
// otherwise runtime error.
pointClass = new PointClass(7, 3);
// or let point: Point = new Point(7, 3); also work
pointClass.draw();
// we can't have multiple constructors in TypeScript
// ==> make constructor parameters optional
var pointClassWithoutParameter = new PointClass();
pointClassWithoutParameter.setX(7);
pointClassWithoutParameter.setY(2);
pointClassWithoutParameter.draw();
// three access modifiers : public, private, protected
// by default all members are public
// when fields are associated with getters and setters
// they can use the feature of property
var PointClassWithProperty = /** @class */ (function () {
    function PointClassWithProperty(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    PointClassWithProperty.prototype.draw = function () {
        // ...
        console.log(this._x, this._y);
    };
    Object.defineProperty(PointClassWithProperty.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointClassWithProperty.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('y cannot be less than zero');
            }
            else {
                this._y = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return PointClassWithProperty;
}());
var pointClassWithProperty = new PointClassWithProperty();
pointClassWithProperty.x = 5;
pointClassWithProperty.y = 3;
console.log(pointClassWithProperty.x, pointClassWithProperty.y);
