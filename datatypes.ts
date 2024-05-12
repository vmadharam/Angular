let id:number = 10;
console.log(id);

let fullName:string = 'Venu Gopal Madharam'
console.log(fullName.slice(3,8));


let numbers: number[];
numbers = [1,2,3,4,5,6,7,8,9] 
console.log(numbers.reduce((a,b)=> a+b))

let isValid: boolean = false;
console.log(isValid);

if(!isValid)
    {
        console.log(!isValid);
    }


let names: string[] = ['Venu', 'Gopal', 'Madharam'];
console.log(names.reduce((a,b)=> a+b));
console.log(names.find((x) => x === "Ven")?.length != undefined);


const enum Color{
    Red,
    Green,
    Blue
}

console.log(Color.Green);


let calculator: [number, number, number, number, string];

function swapNumbers(x:number, y:number) : [number, number, number, number, string] 
{
     return [x+y, x-y, x*y, x/y, 'Success'];
};

calculator = swapNumbers(10, 20);
console.log(calculator);