function add(a:number, b:number, c?:number, d:number=10, ...e:number[]): number
{
    return a+b+(c ?? 0) + d + (e.length >0 ? e.reduce((a,b)=>a+b) :0);
}

let sum = add(10,20);
console.log(sum);

sum = add(10,20,30);
console.log(sum);

sum = add(10,20,30,40);
console.log(sum);

sum = add(10,20,30,40,10,10,10);
console.log(sum);




const sub = (a:number, b:number) => a-b;
console.log(sub(6,3));

