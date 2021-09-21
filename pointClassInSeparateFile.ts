// if it's not mentioned as export it will not be available outside of this file
// since export keyword is available in the point of typescript
// this file is a module
export class PointClassInSeparateFile
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