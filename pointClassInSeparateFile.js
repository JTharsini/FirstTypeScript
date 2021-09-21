"use strict";
exports.__esModule = true;
exports.PointClassInSeparateFile = void 0;
// if it's not mentioned as export it will not be available outside of this file
// since export keyword is available in the point of typescript
// this file is a module
var PointClassInSeparateFile = /** @class */ (function () {
    function PointClassInSeparateFile(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    PointClassInSeparateFile.prototype.draw = function () {
        // ...
        console.log(this._x, this._y);
    };
    Object.defineProperty(PointClassInSeparateFile.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointClassInSeparateFile.prototype, "y", {
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
    return PointClassInSeparateFile;
}());
exports.PointClassInSeparateFile = PointClassInSeparateFile;
