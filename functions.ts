function add(a:number, b:number, c?:number, d:number=10): number
{
    return a+b+(c ?? 0) + d;
}

let sum = add(10,20);
console.log(sum);

sum = add(10,20,30);
console.log(sum);

sum = add(10,20,30,40);
console.log(sum);




const sub = (a:number, b:number) => a-b;
console.log(sub(6,3));

