function log(message)
{
    console.log(message);
}

var message = 'Hello world!!';
log(message);

var number = 1;
let count = 2;

function doSomething()
{
    for(var i = 0; i < 5; i++)
    {
        console.log(i);
    }

    console.log('Finally: ' + i);
    // if let i is used instead for var i
    // i will not be accessible outside the
    // for block. compile error due to the
    // TypeScript compiler
}

doSomething();

let numeric = 5;
//numeric = "a"; 
// compilation error since trying to assign
// a string to a numeric variable. error from
// tsc

let a;
a = 1;
a = true;
a = 'a';
// now even typescript will not complaint then 
// if we don't know the initial value of a 
// variable ==> need to add the type of it as below:

let aModified: number;
aModified = 1;
//aModified = true; // it will fail now

let numericType: number;
let b: boolean;
let c: string;
let d: any;
let e: number[]; // let e: number[] = [1, 2, 3]
let f: any[] = [1, true, 'a'];

const COLOR_RED = 0;
const COLOR_GREEN = 1;
const COLOR_BLUE = 2;

// group of related constants: enum (Eg: color)
enum color
{
    RED = 0, GREEN = 1, BLUE = 2
    // internally RED = 0, GREEN = 1, BLUE = 2
    // even though it's not explicitly assigned.
    // but good to add them since in future
    // if someone adds another color in the
    // middle it will change the number of them
}
let background = color.BLUE;

let newString = 'abc';
// newString. will give available functions for string
let endsWithC = newString.endsWith('c');

let newString2;
newString2 = 'abc';
// since newString2 is any, tool doesn't know
// the type of newString2. Therefore, needs to
// specify that.
let endsWithCFor2 = (<string>message).endsWith('c');
// can be specified another way also
let alternative = (message as string).endsWith('c');
// these specifications will not restructure the
// type of variable in memory.
// it's used to get the intelligence of the tool.